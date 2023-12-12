export default function OfferCard(props)
{
    return(
        <div className="card rounded-lg flex bg-white flex-col flex-1 min-w-[150px] sm:max-w-[300px] min-h-[200px] p-8 gap-3">
            <div className="shrink-0 h-[50px] w-[50px] self-center">
                <img src={props.src} />
            </div>
            <div className="flex flex-col justify-center">
                <h3 className="text-xl text-center">
                    {props.title}
                </h3>
                <p className="text-sm text-center mt-2 text-slate-800">
                    {props.content}
                </p>
            </div>
        </div>
    )
}