export default function OfferCard(props)
{
    return(
        <div className="rounded-[50px] border-4 border-royal flex bg-slate-200 flex-1 min-w-[150px] sm:max-w-[300px] min-h-[200px] p-2 gap-3">
            <div className="shrink-0 h-[50px] w-[50px] self-center">
                <img src={props.src} />
            </div>
            <div className="flex flex-col justify-center">
                <h3 className="text-xl">
                    {props.title}
                </h3>
                <p className="text-sm">
                    {props.content}
                </p>
            </div>
        </div>
    )
}