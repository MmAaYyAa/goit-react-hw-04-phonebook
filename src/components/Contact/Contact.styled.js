import styled from 'styled-components';

export const ContactItem = styled('div')(() => {
  return {
    display: 'flex',
    gap: '20px',
    alignItems: 'center',
    backgroundColor: '#fcfcfc',
    boxShadow: '3px 3px 15px #dee1ec',
    fontSize: '18px',
    padding: '15px 0 15px 12px',
    width: '500px',
    marginBottom: '5px',
    marginLeft: '12px',
    li: {
      width: '350px',
    },
  };
});

export const DeleteButton = styled('button')(() => {
  return {
    display: 'block',
    width: '80px',
    padding: '4px 10px',
    backgroundColor: 'white',
    color: '#475053',
    borderRadius: '3px',
    border: '1px solid lightgray',
    '&:hover': {
      outline: 'none',
      border: '2px solid #4756ca',
      cursor: 'pointer',
      backgroundColor: '#4756ca',
      color: 'white',
    },
  };
});
