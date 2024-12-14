import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import styles from './Faqs.module.css'; // Make sure to create and use this file for styling

export default function Faqs() {
  return (
    <div className={styles.faqContainer}>
      {/* FAQ Header */}
      <Typography variant="h4" className={styles.faqHeader}>
        FAQs
      </Typography>

      {/* Accordion Items */}
      <Accordion style={{ background: "black", color: "white" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Is Qtify free to use?</Typography>
        </AccordionSummary>
        <AccordionDetails style={{ background: "white", color: "black" }}>
          <Typography>
          Yes! It is 100% free, and has 0% ads
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion style={{ background: "black", color: "white" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Can we download songs?</Typography>
        </AccordionSummary>
        <AccordionDetails style={{ background: "white", color: "black" }}>
          <Typography>
          Sorry, unfortunately we don't provide the service to download any songs
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
