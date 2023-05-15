import FindYourSecretFriend from "@/components/findYourSecretFriend";
import SecretFriend from "@/components/secreatFrined";
import SelectWhoIsYou from "@/components/selectWhoIsYou";

export interface MyStep {
    title: string;
    screen: JSX.Element;
    showInList: boolean;
}

const steps: MyStep[] = [
    {
        title: "Selecione quem você é",
        screen: <SelectWhoIsYou />,
        showInList: true
    },
    {
        title: "Descubra seu amigo secreto",
        screen: <FindYourSecretFriend />,
        showInList: true
    },
    {
        title: "Seu amigo secreto é:",
        screen: <SecretFriend />,
        showInList: false
    },
]

export { steps }