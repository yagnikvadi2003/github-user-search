import React from 'react';

const Form = React.lazy(() => import('../container/common/Form'));
const Card = React.lazy(() => import('../container/common/Card'));

const UserSearch: React.FC = (): JSX.Element => {
  // 👇️ pass empty string as initial value
  const [targetValue, setTargetValue] = React.useState('');

  /**
  * Here we restrict all handleClicks to be exclusively on 
  * HTMLFormElement Elements
  * 
  * We're using `FormEventHandler` as type for the event.
  * with `HTMLFormElement` as a type parameter.
  * It contains properties an event can have
  * and methods (such as `preventDefault` an others).
  * be fired on an HTML <button> element.
  **/
  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event: React.FormEvent<HTMLFormElement>) => {
    // 👇️ prevent page refresh
    event?.preventDefault();
    console.log("targetValue: ", targetValue);
  }

  /**
  * Here we restrict all handleClicks to be exclusively on 
  * HTMLInputElement Elements
  * 
  * We're using `ChangeEvent` as type for the event.
  * with `HTMLInputElement` as a type parameter.
  * It contains properties an event can have
  * and methods (such as `preventDefault` an others).
  **/
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // 👇️ prevent page refresh
    event?.preventDefault();
    setTargetValue(event.target.value);
  };

  /**
  * Here we restrict all handleClicks to be exclusively on 
  * HTMLButtonElement Elements
  * 
  * We're using `MouseEvent` as type for the event.
  * with `HTMLButtonElement` as a type parameter.
  * It contains properties an event can have
  * and methods (such as `preventDefault` an others).
  **/
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    // 👇️ prevent page refresh
    event?.preventDefault();
    // 👇️ redirects to an external URL
    window.open('https://github.com/yagnikvadi2003', '_blank', 'noopener noreferrer');
  };

  /*
  * 👇️type assertion
  * ✅ value={targetValue as string}
  */
  return (
    <React.Fragment>
      <div className="userSearchMain">
        <div className='userSearchHeading'>GitHub User Search</div>
        <Form onSubmit={handleSubmit} onChange={handleChange} value={targetValue} InputId='userSearchInput' className='fa-solid fa-magnifying-glass' ButtonId='userSearchButton'/>
      </div>
      <Card avatarUrl='../assets/images/download.jpeg' ImageId='cardImage' children='GitHub' className='fa-brands fa-github' onClick={handleClick}/>
    </React.Fragment>
  );
};

export default UserSearch;