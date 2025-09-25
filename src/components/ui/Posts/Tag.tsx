import styles from './tags.module.css';

interface Props {
    tag: string,
}
export default function Tag(props: Props) {
    const { tag } = props;
    return (
        <span className={styles.tagStyle}>
            {tag}
        </span>
    )

}