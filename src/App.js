import React from 'react';
import ThemeSwitcher from './ThemeSwitcher';
import TextInput from './TextInput';
import TodoList from './TodoList';
import ShowHideText from './ToggleVisibility';
import SliderValue from './SliderValue';
import ImageCarousel from './ImageCarousel';
import SumCalculator from './SumCalculator';
import RegistrationForm from './RegistrationForm';
import ListFilter from './ListFilter';
import Tabs from './Tabs';
import VideoGallery from './VideoGallery';
import ExpenseCalculator from './ExpenseCalculator';
import Voting from './Voting';
import FeedbackForm from './FeedbackForm';
import LanguageSwitcher from './LanguageSwitcher';
import DatePicker from './DatePicker';
import EditableContactList from './EditableContactList';
import CharCounter from './CharCounter';
import MemeGallery from './MemeGallery';
import AnimatedButton from './AnimatedButton';

function App() {
  return (
    <div className="App">
      <div className="container">
        <h2>1. Перемикач Теми</h2>
        <ThemeSwitcher initialTheme="light" />

        <h2>2. Поле Вводу Тексту</h2>
        <TextInput />

        <h2>3. Список Завдань (Todo List)</h2>
        <TodoList />

        <h2>4. Сховане/Показане Вікно</h2>
        <ShowHideText />

        <h2>5. Слайдер Значення</h2>
        <SliderValue />

        <h2>6. Карусель Зображень</h2>
        <ImageCarousel />

        <h2>7. Перерахунок Суми</h2>
        <SumCalculator />

        <h2>8. Форма Реєстрації</h2>
        <RegistrationForm />

        <h2>9. Фільтр Списку</h2>
        <ListFilter />

        <h2>10. Керування Вкладками (Tabs)</h2>
        <Tabs />

        <h2>11. Галерея з Відео</h2>
        <VideoGallery />

        <h2>12. Калькулятор Витрат</h2>
        <ExpenseCalculator />

        <h2>13. Голосування (Voting)</h2>
        <Voting />

        <h2>14. Форма Зворотного Зв'язку (Feedback Form)</h2>
        <FeedbackForm />

        <h2>15. Перемикач Мови Інтерфейсу</h2>
        <LanguageSwitcher />

        <h2>16. Календарний Вибір Дати</h2>
        <DatePicker />

        <h2>17. Список Контактів з Можливістю Редагування</h2>
        <EditableContactList />

        <h2>18. Підрахунок Символів у Тексті</h2>
        <CharCounter />

        <h2>19. Галерея Мемів з Лайками</h2>
        <MemeGallery />

        <h2>20. Кнопка з Анімацією Натискання</h2>
        <AnimatedButton />
      </div>
    </div>
  );
}

export default App;
