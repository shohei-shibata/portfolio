import Link from 'next/link';

const LinkStrong = props => (
  <Link href={props.href}>
    <p>
      <a className='thick-underline'>{props.text}</a>
    </p>
  </Link>
);
export default LinkStrong;
