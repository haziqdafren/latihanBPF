export default function HelloWorld(){

    const propUserCard = {
        nama : "Jodi",
        nim : "12341",
        tanggal : "2024-10-10"
    }
    return(
        <div>
            <h1>Hello World</h1>
            <p>Selamat Belajar ReactJS</p>
            <GreetingBinjai/>
            <QuoteText/>
            <UserCard
            nama = "haziq"
            nim = "12345"
            tanggal = {new Date().toLocaleDateString()}
            />
            <UserCard {...propUserCard}/>
        </div>
    )
    }

    function GreetingBinjai(){
        return(
            <small>Salam Dari Binjai</small>
        )
    }

    function QuoteText(){
        const text = "Mulutmu Harimaumu";
        const text2 = "Aku ingin jadi macan";

        return (
            <div>
                <hr />
                <p>{text.toLowerCase()}</p>
                <p>{text.toUpperCase()}</p>
            </div>
        )

    }

    function UserCard(props){
        return(
            <div>
                <hr />
                <h3>Nama: {props.nama}</h3>
                <p>NIM: {props.nim}</p>
                <p>Tanggal: {props.tanggal}</p>
            </div>
        )
    }