
import Link from 'next/link'
import Image from 'next/image'
import logo from '../public/monty.jpg'

function NavBar ({account}) {
    return (
        <>
            <div className="navbar">
                <Link href="/">
                    <Image src={logo} alt="918Dcx Logo" width={90} height={50}></Image>
                </Link>
                <div className="account-info">
                    <p>Welcome {account.userName}</p>
                    <img src={account.avatar.url} alt="" className="avatar" />
                </div>
            </div>
            <h1 className="top-3 flex justify-center text-[50px]">Dream of Dragons</h1>
        </>
    )
}

export default NavBar
