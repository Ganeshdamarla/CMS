// dc-home.component.ts

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ComplaintService } from '../complaint.service';

@Component({
  selector: 'app-dc-home',
  templateUrl: './dc-home.component.html',
  styleUrls: ['./dc-home.component.css']
})
export class DcHomeComponent implements OnInit {
  complaints: any[] = [];
  complaintsVisible: boolean = false;
  dcFormClicked: boolean = false;
  modalVisible: boolean = false;
  selectedComplaint: any | null = null;
  assignedToOptions: any[] = [
    { value: '', label: 'Select' },
    { value: 'EO1', label: 'EO1' },
    { value: 'EO2', label: 'EO2' },
    // Add more options as needed
  ];

  constructor(private router: Router, private complaintService: ComplaintService) { }

  ngOnInit(): void {
    this.loadComplaints();
  }

  loadComplaints(): void {
    // Retrieve complaints assigned to the current DC
    const currentUserRole = 'DC'; // Assuming current user role is hardcoded for example
    this.complaints = this.complaintService.getComplaints().filter(
      complaint => complaint.assignedTo === currentUserRole
    );
  }

  showComplaints(): void {
    this.complaintsVisible = !this.complaintsVisible;
  }

  navigateToDCForm(): void {
    this.dcFormClicked = !this.dcFormClicked;
    if (this.dcFormClicked) {
      this.router.navigate(['/dc-form']);
    }
  }

  toggleActionButtons(complaint: any): void {
    complaint.showActions = !complaint.showActions;
  }

  assignComplaint(complaint: any, assignedTo: string): void {
    complaint.status = 'Assigned';
    complaint.assignedTo = assignedTo;
    this.complaintService.updateComplaint(complaint);
    alert(`Complaint ${complaint.name} assigned to ${assignedTo}`);
  }

  deleteComplaint(complaint: any): void {
    if (confirm(`Are you sure you want to delete complaint ${complaint.name}?`)) {
      this.complaints = this.complaints.filter(c => c.id !== complaint.id);
    }
  }

  viewComplaint(complaint: any): void {
    this.selectedComplaint = complaint;
    this.modalVisible = true;
  }

  closeModal(): void {
    this.modalVisible = false;
    this.selectedComplaint = null;
  }

  logout(): void {
    this.router.navigate(['/user-login']);
  }
}
