import Animation from "@/app/components/Animation";

const ResumePreview = ({data }) => {
    return(
        <div>
            <h1> ResumePreview </h1>
            <Animation delay = {0.2}>
            <h2> {data.name} </h2>
            <p>{data.education}</p>
            </Animation>

            <Animation delay = {0.4}>
                <p>Email: {data.email}</p>
                </Animation>

                <Animation delay = {0.6}>
                    <h3>Skills</h3>
                    <p>{data.skills}</p>
                </Animation>

                <Animation delay = {0.8}>
                    <h4>Experience</h4>
                    <p>{data.experience}</p>
                </Animation>
        </div>
    );
};

export default ResumePreview;