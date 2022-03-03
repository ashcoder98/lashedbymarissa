import '../App.css';
import Picture from './Picture';
import Name from './Name';
import About from './About';
function BioSection() {
  return (
    <div className="BioSection">
      <Picture />
      <Name></Name>
      <About></About>
    </div>
  );
}

export default BioSection;
