import ImovelPageView from "./view";

export default function Imovel(props: { params: Promise<{ slug: string }> }) {
  return <ImovelPageView params={props.params} />;
}
