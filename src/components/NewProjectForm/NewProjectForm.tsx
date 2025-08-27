import PageTitle from "@/components/Common/PageTitle";
import MultiPartForm from "@/components/Anketa/Anketa";

export default function NewProjectForm() {
    return (
        <div className="anketa-page-container">
            <PageTitle title="Анкета" homeText="Головна" homeUrl="/" />

            <div className="anketa-wrapper ptb-100">
                <div className="anketa-inner-container">
                    <h1>
                        Заповнити анкету для прорахунку проєкту
                    </h1>
                    <MultiPartForm />
                </div>
            </div>
        </div>
    );
}