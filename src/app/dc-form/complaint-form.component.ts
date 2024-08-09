import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

interface FormField {
  label: string;
  name: string;
  type: string;
  readonly: boolean;
  disabled: boolean;
  options?: string[];
  value?: string | number;
}

const validationMessages = {
  required: 'This field is required.'
  
};

@Component({
  selector: 'app-complaint-form',
  templateUrl: './complaint-form.component.html',
  styleUrls: ['./complaint-form.component.css']
})
export class ComplaintFormComponent implements OnInit {
  complaintForm: FormGroup;
  activeFields: { [key: string]: boolean } = {};
  submitted = false;

  leftColumnFields: FormField[] = [
    // left column fields 
    { label: 'Complaint Id', name: 'complaintId', type: 'text', readonly: true, disabled: true, value: 'GNT1106240001' },
    { label: 'Complaint details', name: 'complaintDetails', type: 'text', readonly: true, disabled: true, value: 'Noise complaint in the neighborhood' },
    { label: 'Complaint Type', name: 'complaintType', type: 'text', value: 'Type A', readonly: true, disabled: false },
    { label: 'Attachments', name: 'attachments', type: 'image', value: 'document.pdf', readonly: true, disabled: false },
    { label: 'Mandal', name: 'mandal', type: 'text', readonly: true, disabled: true, value: 'Mandal A' },
    { label: 'Village', name: 'village', type: 'text', readonly: true, disabled: true, value: 'Village X' },
    { label: 'Received Time Stamp', name: 'receivedTimeStamp', type: 'text', readonly: true, disabled: true, value: '2024-06-10 10:00:00' },
    { label: 'Status', name: 'status', type: 'dropdown', options: ['New (C)', 'Assigned To Enquiry Officer', 'ATR Preliminary Submitted', 'Review', 'Enquiry Completed'], readonly: false, disabled: false },
    { label: 'Assigned to Enquiry Officer', name: 'assignedToEnquiryOfficer', type: 'dropdown', options: ['SHO', 'ESTF', 'ENF', 'BMPP', 'CP', 'Self'], readonly: false, disabled: false },
    { label: 'ATR Preliminary', name: 'atrPreliminary', type: 'textarea', readonly: false, disabled: false },
    { label: 'Crime Detection', name: 'crimeDetection', type: 'dropdown', options: ['Detected', 'Not Detected'], readonly: false, disabled: false }
  ];

  rightColumnFields: FormField[] = [
    // right column fields 
    { label: 'ATR', name: 'atr', type: 'textarea', readonly: false, disabled: false },
    { label: 'ATR Attachments', name: 'atrAttachments', type: 'file', readonly: false, disabled: false, value: "a" },
    { label: 'Cases booked', name: 'casesBooked', type: 'number', readonly: false, disabled: false },
    { label: 'Persons arrested', name: 'personsArrested', type: 'number', readonly: false, disabled: false },
    { label: 'Seizure Type', name: 'seizureType', type: 'dropdown', options: ['Type1', 'Type2'], readonly: false, disabled: false },
    { label: 'Number of vehicles seized', name: 'numberOfVehiclesSeized', type: 'number', readonly: false, disabled: false },
    { label: 'Property Type', name: 'propertyType', type: 'dropdown', options: ['Property1', 'Property2'], readonly: false, disabled: false },
    { label: 'Quantity seized (Litres)', name: 'quantitySeized', type: 'number', readonly: false, disabled: false },
    { label: 'Illicit Liquor', name: 'illicitLiquor', type: 'dropdown', options: ['Yes', 'No'], readonly: false, disabled: false },
    { label: 'U/S', name: 'us', type: 'text', readonly: false, disabled: false },
    { label: 'Final Remarks', name: 'finalRemarks', type: 'textarea', readonly: false, disabled: false }
  ];

  constructor(private fb: FormBuilder) {
    this.complaintForm = this.fb.group({});
  }

  ngOnInit() {
    this.initializeForm();
  }

  initializeForm() {
    this.leftColumnFields.concat(this.rightColumnFields).forEach(field => {
      this.complaintForm.addControl(field.name, this.fb.control({ value: field.value || '', disabled: field.disabled }, Validators.required));
      this.activeFields[field.name] = !!field.value;
    });
  }

  onFocus(fieldName: string) {
    this.activeFields[fieldName] = true;
  }

  onBlur(fieldName: string) {
    if (!this.complaintForm.get(fieldName)?.value) {
      this.activeFields[fieldName] = false;
    }
  }

  isActive(fieldName: string): boolean {
    return this.activeFields[fieldName];
  }

  getErrorMessage(fieldName: string): string {
    const control = this.complaintForm.get(fieldName);
    if (control && control.invalid && control.touched) {
      const errors = control.errors ?? {}; // Provide a default empty object if errors is null
      const errorKeys = Object.keys(errors);
      if (errorKeys.length > 0) {
        const errorKey = errorKeys[0] as keyof typeof validationMessages; 
        return validationMessages[errorKey];
      }
    }
    return '';
  }
  

  onSubmit() {
    this.submitted = true;
    Object.keys(this.complaintForm.controls).forEach(field => {
      const control = this.complaintForm.get(field);
      if (control) {
        control.markAsTouched({ onlySelf: true });
      }
    });

    if (this.complaintForm.valid) {
      console.log(this.complaintForm.value);
      alert('Form submitted successfully');
      this.complaintForm.reset();
      this.submitted = false;
    }
  }
}

