import PageTitle from "@/components/Common/PageTitle";
import Anketa from "@/components/Anketa/Anketa";
import styles from "./AnketaWrapper.module.scss";

export default function AnketaWrapper() {
    return (
        <div className={styles.anketaPageContainer}>
            <PageTitle title="Анкета" homeText="Головна" homeUrl="/" />

            <div className={`${styles.anketaWrapper} ptb-100`}>
                <div className={styles.anketaInnerContainer}>
                    <h1>
                        Заповнити анкету для прорахунку проєкту
                    </h1>
                    <Anketa />
                </div>
            </div>
        </div>
    );
}