import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker-cssmodules.css'
import "react-datepicker/dist/react-datepicker.css";
import { registerLocale } from "react-datepicker";
import es from "date-fns/locale/es";
import enGB from "date-fns/locale/en-GB";
registerLocale("es", es);

const DateTab = (props) => {
  const locale = props.language === "en" ? enGB : es;
  
  return (
    <DatePicker
      selected={new Date()}
      locale={locale}
      onChange={props.onDateChange} 
      closeOnScroll={(e) => e.target === document}
    />
  );
};

export default DateTab;
