# map()함수란?
 - 반복되는 컴포넌트를 렌더링하기 위하여 자바스크립트 배열의 내장 함수인 map()을 사용 한다.  - 파라미터로 전달된 함수를 사용하여 배열 내 각 요소를 원하는 규칙에 따라 변환한 후 새로운 배열 생성 한다.


# Switch' is not exported from 'react-router-dom'  해결 방법
참고 : https://miracleground.tistory.com/entry/Error-Switch-is-not-exported-from-react-router-dom-%ED%95%B4%EA%B2%B0
- react-router-dom v6로 업데이트 되면서 변경된 부분 중에 하나가 Switch가 `Routes` 로 바뀌었다.
사용법 :
`v5 버전`
<Switch>
    <Route exact path="/" component={Home} />
    <Route path="/report" component={Report} />
    <Route path="/passenger" component={Passenger} />
</Switch>

`v6 버전`
<Routes>
    <Route path="/" element={<Home />} />
    <Route path="/report" element={<Report />} />
    <Route path="/passenger" element={<Passenger />} />
</Routes>



# 명령어
`react에서 router를 사용하기위한 dom 설치`
npm install react-router-dom

# 코드설명
`Link 사용법`
<Link to ={`/day/${day.day}`}>Day {day.day}</Link>

<Link> Tag는 와 Html의 <a> Tag와 같습니다.
to=는 path와 같습니다.

to에 변수값을 넣고 사용할때는 ''(single quotation) - 싱글코우테이션이 아닌 ``(Grave) - 그레이브로 유의해서 사용합니다.

`useParams 사용법`
- url에 포함된 값을 얻을때는 react-router-dom에서 제공하는 useParams Hook을 사용합니다.
import { useParams } from "react-router-dom";

/day/:day 콜론을 붙여서 사용합니다.

<Route path="/day/:day" element={<Day/>}></Route>
