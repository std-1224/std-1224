import WorksCanvas from "./WorksCanvas";

const Works = ({className}: any) => {
    return (
        <div className={`flex-1 ${className}`}>
            <WorksCanvas />
        </div>
    )
}
export default Works;