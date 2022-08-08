import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";

export default function DayList() {
    const days = useFetch('http://localhost:3001/days');

    // const [ days, setDays ] = useState([]);

    // useEffect(() => {
    //     fetch('http://localhost:3001/days')
    //     .then(res => {
    //         return res.json();
    //     })
    //     .then(data => {
    //         setDays(data);
    //     });
    // }, []); // 의존성 배열 : 해당 값(count)이 변결될 때 마다 useEffect의 함수가 실행
    // 빈배열로 넣으면 랜더링 직후 최초에 한번만 실행

    return (
        <>
            <ul className="list_day">
                {days.map(day => (
                    <li key={day.id}>
                        <Link to ={`/day/${day.day}`}>Day {day.day}</Link>
                    </li>
                ))}
            </ul>
        </>
    );
}