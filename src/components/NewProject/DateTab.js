import DatePicker from "react-datepicker";
import { registerLocale } from "react-datepicker";
import es from "date-fns/locale/es";
registerLocale("es", es);

const DateTab = (props) => {
  const locale = props.language === "en" ? "en-GB" : es;
  const MyContainer = ({ className, children }) => {
    return (
      <div style={{ padding: "16px", background: "#216ba5", color: "#fff" }}>
        <div style={{ background: "#f0f0f0" }}>When is the end date?</div>
        <div style={{ position: "relative" }}>{children}</div>
      </div>
    );
  };
  return (
    <DatePicker
      selected={props.startDate}
      locale={locale}
      onChange={props.onDateChange}
      calendarContainer={MyContainer}
    />
  );
};

export default DateTab;
