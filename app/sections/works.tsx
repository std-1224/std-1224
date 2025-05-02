import WorksCanvas from "./WorksCanvas";

const Works = ({ className }: any) => {
    return (
        <div className={`flex-1 ${className} sm:w-[650px] lg:w-full`}>
            <WorksCanvas />
        </div>
    )
}
export default Works;