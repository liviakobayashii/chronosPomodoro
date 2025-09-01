import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export function NotFoundView() {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col items-center justify-center text-center">
            <h1 className="text-[12rem] font-medium text-primary">404</h1>
            <h2 className="font-bold">Página não encontrada!</h2>
            <p className="my-15 text-3xl w-[70%] text-center">
                Essa página não existe... mas você ainda pode recomeçar seu foco. Volte
                para o painel inicial e continue produtivo.
            </p>

            <Button onClick={() => navigate("/")} className="p-8">
                Voltar para a página inicial
            </Button>
        </div>
    );
}
