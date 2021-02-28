import React from 'react';

class FeedbackOptions extends React.Component {
  render() {
    //   Массив имен свойств объекта состояния из компонента Counter.
    //   Из них создаем имена для кнопок и для свойства кнопки
    //   name (необходимо для определения по какой кнопке был клик).
    //   Предугадывая вопрос ментора, напоминаю условие задачи -
    //   "Состояние приложения обязательно должно быть следующего вида, добавлять новые свойства нельзя."

    const namePropState = Object.keys(this.props.options);
    return (
      <>
        {namePropState.map(item => (
          <button
            key={item}
            type="button"
            name={item}
            onClick={this.props.onLeaveFeedback}
          >
            {item[0].toUpperCase() + item.slice(1)}
          </button>
        ))}
      </>
    );
  }
}
export default FeedbackOptions;
