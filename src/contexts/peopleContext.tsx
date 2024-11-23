import { db } from "@/services/firebase";
import { collection, doc, getDocs, setDoc, updateDoc, writeBatch } from "firebase/firestore";
import { createContext, useEffect, useState } from "react";

export interface Person {
    id: string,
    name: string,
    imageSrc: string,
    secretFriendId: string,
    isAFriend: boolean,
    cantBeFriend: string[],
    wishes?: string,
} 

interface IPeopleContext {
    people: Person[];
    personSelected: Person;
    setPerson: (Person: Person) => void;
    getASecretFriend: (Person: Person) => Promise<void>;
    clearAll: () => Promise<void>;
    secretFriend: Person;
    load: boolean;
    saveWishes: (Person: Person, Wishes: string) => void
}

export const PeopleContext = createContext<IPeopleContext>({} as IPeopleContext);

interface Props{
    children: JSX.Element
}

const PEOPLE_COLLECTION_NAME = "peaple"

export const PeopleProvider = function({ children }: Props){
    const [people, setPeople] = useState<Person[]>([]);
    const [personSelected, setPersonSelected] = useState<Person>({} as Person);
    const [secretFriend, setSecretFriend] = useState<Person>({} as Person);
    const [load, setLoad] = useState<boolean>(true);

    const loadPeople = async () => {
        const peopleCollection = collection(db, PEOPLE_COLLECTION_NAME);
        const peopleSnapshot = await getDocs(peopleCollection);
        const people: Person[] = peopleSnapshot.docs.map(doc => ( { id: doc.id ,...(doc.data()) } as Person));
        setPeople(people);
        setLoad(false);
    }

    const getASecretFriend = async (person: Person) => {
        setLoad(true);
        const peopleCollection = collection(db, PEOPLE_COLLECTION_NAME);
        const peopleSnapshot = await getDocs(peopleCollection);
        const people: Person[] = peopleSnapshot.docs.map(doc => ( { id: doc.id ,...(doc.data()) } as Person));
        const possibleFriendsList = people.filter( ({id, isAFriend}) => {
            return !isAFriend && id !== person.id && !( person.cantBeFriend && person.cantBeFriend.includes(id) )
        });
        const indexFriend = Math.floor( Math.random() * possibleFriendsList.length );
        const newFriend = possibleFriendsList[indexFriend];
        const batch = writeBatch(db);
        batch.update(doc(db, PEOPLE_COLLECTION_NAME, person.id), { secretFriendId: newFriend.id })
        batch.update(doc(db, PEOPLE_COLLECTION_NAME, newFriend.id), { isAFriend: true })
        await batch.commit();
        setSecretFriend(newFriend);
        setLoad(false);
    }

    const saveWishes = async (person: Person, wishes: string) => {
        setLoad(true);
        await setDoc(doc(db, PEOPLE_COLLECTION_NAME, person.id),{ wishes }, { merge: true })
        setLoad(false);
    } 

    const clearAll = async () => {
        setLoad(true);
        const batch = writeBatch(db);
        people.forEach( person => {
            batch.update(doc(db, PEOPLE_COLLECTION_NAME, person.id), { secretFriendId: null, isAFriend: false })
        })
        await batch.commit();
        await loadPeople();
        setLoad(false);
    } 

    useEffect(() => {
        setLoad(true);
        loadPeople();
    },[]);

    const setPerson = (Person: Person) => {
        setPersonSelected(Person);
    }

    return (
        <PeopleContext.Provider value={{people, personSelected, setPerson, getASecretFriend, secretFriend, load, clearAll, saveWishes}}>
            {children}
        </PeopleContext.Provider>
    )
}