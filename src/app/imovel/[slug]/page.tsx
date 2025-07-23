import Imovel from "@/ui/imovel/[slug]";

export default function ImovelPage(props: { params: Promise<{slug:string}> }){
    return <Imovel params={props.params} />
}