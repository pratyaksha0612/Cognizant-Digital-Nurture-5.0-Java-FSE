import styles from "./CohortDetails.module.css";

function CohortDetails({ cohort }) {
  return (
    <div className={styles.box}>
      <h3
        className={
          cohort.status === "Ongoing"
            ? styles.green
            : styles.blue
        }
      >
        {cohort.code}
      </h3>

      <dl>
        <dt>Started On</dt>
        <dd>{cohort.startedOn}</dd>

        <dt>Current Status</dt>
        <dd>{cohort.status}</dd>

        <dt>Coach</dt>
        <dd>{cohort.coach}</dd>

        <dt>Trainer</dt>
        <dd>{cohort.trainer}</dd>
      </dl>
    </div>
  );
}

export default CohortDetails;