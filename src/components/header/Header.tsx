import {MegaphoneIcon} from '@heroicons/react/24/solid';
import {Avatar, AvatarFallback, AvatarImage} from '@/components/ui/avatar';
import styles from './header.module.css';

export default function Header() {
    return (
        <header className={styles.header}>
        <div className="flex">
            <h1 className="mr-8">
                <a className={`flex text-lg/1.3 font-extrabold ${styles.navlink}`} href="/">
                <MegaphoneIcon className="size-6 mr-3" /> Connect
                </a>
            </h1>
            <nav>
                <ul className="flex gap-10">
                    <li><a className={`text-sm ${styles.navlink}`} href="/members">Members</a></li>
                    <li><a className={`text-sm ${styles.navlink}`} href="/notifications">Notifications</a></li>
                    <li><a className={`text-sm ${styles.navlink}`} href="/messages">Messages</a></li>
                </ul>
            </nav>
        </div>
        <Avatar className="size-10">
            <AvatarImage src="avatars/1.png" alt="User Avatar" />
            <AvatarFallback>MA</AvatarFallback>
        </Avatar>
      </header>
);
}