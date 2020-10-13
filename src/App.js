import React from 'react';
import Customer from './components/Customer'
import './App.css';

const customer = [{
  'id': 1,
  'image': 'http://placeimage.com/64/64/1',
  'name' : '홍길동',
  'birthday' : '951231',
  'gender' : '남자',
  'job' : '대학생'
},
{
  'id' : 2,
  'image' : 'http://placeimg.com/64/64/2',
  'name' : '임꺽정',
  'birthday' : '951230',
  'gender' : '남자',
  'job' : '프로그래머'
},
{
  'id' : 3,
  'image' : 'http://placeimg.com/64/64/3',
  'name' : '장보고',
  'birthday' : '951220',
  'gender' : '남자',
  'job' : '디자이너'
}
]

function App() {
  return (
    <div>{
      customer.map(c => {
        return(
          <Customer
          key={c.id}
          id = {c.id}
          image={c.image}
          name={c.name}
          birthday={c.birthday}
          gender={c.gender}
          job={c.job}
          />
        )
      })
      }
    </div>
  );
}

export default App;