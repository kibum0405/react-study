import { useParams } from "react-router-dom";
import Word from "./Word";
import useFetch from "../hooks/useFetch"

export default function Day() {
    const { day } = useParams();

    const words = useFetch(`http://localhost:3001/words?day=${day}`)

    return (
        <>
            <h2>Day {day}</h2>
            <table>
                <tbody>
                <th>영어</th>
                <th>한국어</th>
                <th>일본어</th>
                    {words.map(word => (
                        <Word word={word} key={word.id}></Word>
                    ))}
                </tbody>
            </table>
        </>
    );
}