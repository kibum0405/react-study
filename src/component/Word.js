import { useState } from "react";

export default function Word({ word : w }) {
    const [word, setWord] = useState(w)
    const [isShow, setIsShow] = useState(false);
    const [isDone, setIsDone] = useState(word.isDone);

    function toogleShow() {
        setIsShow(!isShow);
    }

    function toggleDone() {
        // setIsDone(!isDone);
        fetch(`http://localhost:3001/words/${word.id}`, {
            method : 'PUT',
            headers : {
                'Content-Type' : 'application/json', // Content-Type는 평범한 문자열 부터 HTML, 이미지 등등 여러가지 가능
            },
            body : JSON.stringify({
                ...word,
                isDone : !isDone
            }), 
        })
        .then(res => {
            if(res.ok) {
                setIsDone(!isDone);
            }
        });
        
    }

    function del() {
        if(window.confirm('삭제 하시겠습니까?')){
            fetch(`http://localhost:3001/words/${word.id}`, {
                method : 'DELETE',
            }).then(res => {
                if(res.ok) {
                    setWord({ id : 0 });
                }
            });
        }
    }
    
    if (word.id === 0) {
        return null;
    }
    return (
        <tr className={ isDone ? 'off' : '' }>
            <td>
                <input type="checkbox"
                    checked={ isDone } 
                    onChange={ toggleDone }
                />
            </td>
            <td>{word.eng}</td>
            <td>{ isShow && word.kor }</td>
            <td>
                <button onClick={ toogleShow }>뜻 { isShow ? "숨기기" : "보기" }</button>
                <button onClick={ del }
                    className="btn_del"
                >삭제
                </button>
            </td>
        </tr>
    );
}