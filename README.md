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

# 설명
`REST API란`
- Create : POST
- Read : GET
- Update : PUT
- Delete : DELETE

# React Hook 
`useEffect();`
설명 참고 : https://xiubindev.tistory.com/100

# 명령어
`react에서 router를 사용하기위한 dom 설치`
sudo npm install react-router-dom

`작은 프로젝트 or 개인 프로젝트 할때 Api 생성`
빠르고 쉽게 rest api 구축
sudo npm install -g json-server
- 사용법: 
json-server --watch [경로] --port [portNumber]
ex) json-server --watch ./src/db/data.json --port 3001

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

`잘못된 url로 접근시`
<Route path="/" element={<DayList/>}></Route>
<Route path="/day/:day" element={<Day/>}></Route>
<Route path ="*" element={<EmptyPage/>}></Route>
- 잘 작동하는 url의 가장 하단부에 위와같이 명시해준다.
위치가 상단에 있을경우 url이 최상단에 위치한 component가 작동합니다.

`var, let, const 차이점`
- var 로 선언한 변수는 동일한 이름으로 여러 번 중복해서 선언이 가능함. 이와 같은 경우, 마지막에 할당된 값이 변수에 저장됨. 

- var 와 다르게 let 은 해당 변수가 이미 선언되었다는 에러 메시지가 출력됨. 이처럼 중복 선언이 불가능함.

- let 과 const 의 차이점은 immutable 의 여부임. let 은 변수에 다른 값을 재할당할 수 있지만, const 는 재할당 시 에러 메시지가 출력됨. 이처럼 const 는 constant(상수)를 뜻하기 때문에 한 번만 선언이 가능하며 값을 바꿀 수도 없음 
