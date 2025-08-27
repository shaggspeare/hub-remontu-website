import PageTitle from "@/components/Common/PageTitle";
import Anketa from "@/components/Anketa/Anketa";

export default function AnketaWrapper() {
    return (
        <div className="anketa-page-container">
            <PageTitle title="Анкета" homeText="Головна" homeUrl="/" />

            <div className="anketa-wrapper ptb-100">
                <div className="anketa-inner-container">
                    <h1>
                        Заповнити анкету для прорахунку проєкту
                    </h1>
                    <Anketa />
                </div>
            </div>
        </div>
    );
}