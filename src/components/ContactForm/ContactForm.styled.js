import styled from 'styled-components';
export const Form = styled('form')(() => {
  return {
    display: 'flex',
    flexDirection: 'column',
    width: '500px',
    border: '1px solid lightgray',
    padding: '15px 0 15px 12px',
    marginBottom: '30px',
    marginLeft: '12px',
    backgroundColor: '#fcfcfc',
    boxShadow: '3px 3px 15px #dee1ec',
    fontSize: '18px',
    fontWeight: '500',
    color: '#475053',
  };
});

export const Input = styled('input')(() => {
  return {
    display: 'flex',
    flexDirection: 'column',
    padding: '8px 16px',
    marginTop: '8px',
    marginBottom: '24px',
    width: '200px',
    border: '1px solid lightgray',
    borderRadius: '2px',
    color: '#8787a3',
    '&:focus': {
      outline: 'none',
      border: '3px solid #4756ca',
    },
  };
});

export const ContactFormButton = styled('button')(() => {
  return {
    display: 'block',
    width: '140px',
    padding: ' 8px 6px',
    fontSize: '14px',
    color: '#475053',
    backgroundColor: 'white',
    border: '1px solid lightgray',
    borderRadius: '3px',
    '&:hover': {
      outline: 'none',
      border: '2px solid #4756ca',
      cursor: 'pointer',
      backgroundColor: '#4756ca',
      color: 'white',
    },
  };
});

export const ContactFormTitle = styled('h1')(() => {
  return {
    fontSize: '26px',
    marginLeft: '12px',
  };
});
