import Link from 'next/link';
import {Container} from 'reactstrap';

const Main = ({children}) => {
    return (
        <Container>
            <nav>
                <ul>
                    <li>
                        <Link prefetch href="/">
                            <a>Home</a>
                        </Link>
                    </li>
                    <li>
                        <Link prefetch href="/about">
                            <a>About</a>
                        </Link>
                    </li>
                    <li>
                        <Link prefetch href="/contact">
                            <a>Contact</a>
                        </Link>
                    </li>
                </ul>
            </nav>

            { children  }
        </Container>
    )
}

export default Main