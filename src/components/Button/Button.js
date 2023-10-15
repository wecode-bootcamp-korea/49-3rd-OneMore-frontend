import React from 'react';
import styled from 'styled-components';

function Button({ type = 'button', name, label, onClick, disabled, ...props }) {
  return (
    <DefaultButton
      type={type}
      name={name}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {label}
    </DefaultButton>
  );
}

const BUTTON_SIZE = {
  small: {
    height: '45px',
    fontSize: '14px',
  },
  medium: {
    height: '50px',
    fontSize: '16px',
  },
  large: {
    height: '60px',
    fontSize: '24px',
  },
};

const FLEX_CENTER = `
  display: flex;
  justify-content: center;
  align-items: center;
`;

const DefaultButton = styled.button`
  ${FLEX_CENTER}
  width: 100%;
  padding: 12px;
  border-radius: 10px;
  background-color: #8bc34a;
  color: #ffffff;
  height: ${({ size }) =>
    BUTTON_SIZE[size]?.height || BUTTON_SIZE.medium.height};
  font-size: ${({ size }) => BUTTON_SIZE[size]?.height || '20px'};

  &:hover {
    background-color: #7daf42;
  }
  & [disabled] {
    background-color: #c4e0a2;
    cursor: not-allowed;
  }
`;

export default Button;

/*
props

type = [string] 입력 타입 / 기본값 : button
name = [string] 식별을 위한 속성
label = [string] 버튼 내부의 글자
onClick = [function] 클릭 변경 이벤트
disabled = [boolean] 비활성화 여부
*/
