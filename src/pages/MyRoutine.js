import { useState, useEffect } from 'react';
import styled from 'styled-components';
import NotHaveRoutine from './NotHaveRoutine/NotHaveRoutine';
import { useNavigate } from 'react-router-dom';
import BASE_API from '../config';

function MyRoutine() {
  const [myRoutineData, setMyRoutineData] = useState([]);

  const navigate = useNavigate();
  const goToMyRoutine = id => {
    navigate(`/exercise-start/${id}`);
  };

  const DataLength = myRoutineData.length;

  const handleNotHaveMyRoutine = DataLength === 0;

  useEffect(() => {
    fetch('/data/MyRoutine.json', {
      // fetch(`${BASE_API}/routines/my`, {
      method: 'GET',
      // headers: {
      //   'Content-Type': 'application/json;charset=utf-8',
      //   authorization:
      //     'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjExLCJpYXQiOjE2OTc4OTAwNTR9.FX8Trf7wprbM5rYp2rVQBxVmwuezJedWOZj6JbvjSBo',
      // },
    })
      .then(response => {
        return response.json();
      })
      .then(result => {
        console.log(result);
        setMyRoutineData(result.data);
      });
  }, []);

  console.log(myRoutineData);

  // fetch(`${BASE_API}/routines/my/`, {
  //   method: 'post',
  //   headers: {
  //     'Content-Type': 'application/json;charset=utf-8',
  //     token:
  //       'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjYsImlhdCI6MTY5NzY5NDU0OX0.a420s2Kh9RfaUnUC4TliiMEfv4nWD5j4aw9RljMpSPo',
  //   },
  // });

  return (
    <div>
      {handleNotHaveMyRoutine ? (
        <NotHaveRoutine />
      ) : (
        <ExerciseStartStyle>
          <PaddingContainer>
            <H1>내 루틴</H1>
            <ButtonWrapper>필터들어올 부분</ButtonWrapper>
            {myRoutineData.map(product => {
              const {
                routineId,
                routineName,
                totalDuration,
                exerciseNames,
                createDate,
              } = product;

              return (
                <Container
                  key={routineId}
                  onClick={() => {
                    goToMyRoutine(routineId);
                  }}
                >
                  <div>
                    <ContentWrapper>
                      <RoutineNameWrapper>
                        <RoutineName>{routineName}</RoutineName>
                        <MenuImg alt="점점점" src="/images/Group.png"></MenuImg>
                      </RoutineNameWrapper>
                      <DeleteAndModify>
                        <HowMany></HowMany>
                      </DeleteAndModify>
                      <ExerciseContainer>
                        <FirstExerciseNameWrapper>
                          {exerciseNames.map(exerciseName => (
                            <FirstExercise>{exerciseName}</FirstExercise>
                          ))}
                        </FirstExerciseNameWrapper>
                        <SecondExerciseNameWrapper>
                          <TotalTime>총 시간</TotalTime>
                          <TotalTimeNumber>{totalDuration}</TotalTimeNumber>
                        </SecondExerciseNameWrapper>
                      </ExerciseContainer>
                      <LastPlayWrapper>
                        <LastPlay>Last play : {createDate}</LastPlay>
                      </LastPlayWrapper>
                    </ContentWrapper>
                  </div>
                </Container>
              );
            })}
          </PaddingContainer>
        </ExerciseStartStyle>
      )}
    </div>
  );
}
export default MyRoutine;

const ExerciseStartStyle = styled.div``;

const PaddingContainer = styled.div`
  width: 100%;
  padding: 0 15px 0 15px;
`;

const LetterForm = styled.p`
  color: #000;
  font-feature-settings:
    'clig' off,
    'liga' off;
  font-family: Inter;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
const H1 = styled(LetterForm)`
  font-size: 20px;
`;
const Container = styled.div`
  width: 100%;
  background-color: white;
  border-radius: 16px;
  height: auto;
  position: relative;
  margin-bottom: 15px;
  cursor: pointer;
`;

const ButtonWrapper = styled.div`
  width: 100%;
  height: 20px;
  border: 1px solid;
`;

const ContentWrapper = styled.div`
  padding-top: 15px;
  margin: 0 15px;
`;

const WrapperForm = styled.div`
  display: flex;
  justify-content: space-between;
`;

const RoutineNameWrapper = styled(WrapperForm)``;

const RoutineName = styled(LetterForm)`
  font-size: 24px;
`;

const MenuImg = styled.img`
  width: 4px;
  height: 15px;
`;

const DeleteAndModify = styled(WrapperForm)``;

const HowMany = styled(LetterForm)`
  margin-top: 5px;
  font-size: 12px;
  font-weight: 500;
`;

const FirstExerciseNameWrapper = styled(WrapperForm)`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const FirstExercise = styled(LetterForm)`
  font-size: 16px;
  font-weight: 500;
`;

const SecondExerciseNameWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 8px;
`;
const TotalTimeNumber = styled(LetterForm)`
  font-size: 16px;
`;

const ExerciseContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 24px;
`;

const LastPlayWrapper = styled(WrapperForm)`
  margin-top: 12px;
`;

const LastPlay = styled.p`
  color: #999;
  font-feature-settings:
    'clig' off,
    'liga' off;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const TotalTime = styled.span`
  font-size: 16px;
  color: ${({ theme }) => theme.green};
`;
