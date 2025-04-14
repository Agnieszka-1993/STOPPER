import styles from './FormattedTime.module.scss';

const FormattedTime = (props) => {
    const time = props.time;

    const formatTime = (milliseconds) => {
        const hours = Math.floor(milliseconds / 3600000);
        const minutes = Math.floor((milliseconds % 3600000) / 60000);
        const seconds = Math.floor((milliseconds % 60000) / 1000);
        const ms = milliseconds % 1000;

        const pad = (value, length = 2) => String(value).padStart(length, '0');

        return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}.${pad(ms, 3)}`;
      };


    return (
        <div className={styles.component}>
             {formatTime(time)}
        </div>
    );
};

export default FormattedTime;