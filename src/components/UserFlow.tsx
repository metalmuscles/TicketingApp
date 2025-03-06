import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const UserFlow = () => {
  return (
    <div className="container mx-auto p-4 bg-background">
      <h1 className="text-3xl font-bold mb-6 text-center">
        TripGh Bus Ticketing Platform User Flow
      </h1>

      <Tabs defaultValue="passenger" className="w-full">
        <TabsList className="grid w-full grid-cols-2 mb-8">
          <TabsTrigger value="passenger">Passenger Flow</TabsTrigger>
          <TabsTrigger value="admin">Admin Dashboard Flow</TabsTrigger>
        </TabsList>

        <TabsContent value="passenger" className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>1. Search & Selection</CardTitle>
              <CardDescription>
                Initial steps for passengers to find and select their trip
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ol className="list-decimal pl-5 space-y-4">
                <li className="font-medium">
                  Visit TripGh Website/App
                  <ul className="list-disc pl-5 mt-2 font-normal">
                    <li>Land on homepage with prominent search form</li>
                    <li>View featured routes and promotions</li>
                  </ul>
                </li>
                <li className="font-medium">
                  Search for Routes
                  <ul className="list-disc pl-5 mt-2 font-normal">
                    <li>Enter origin and destination locations</li>
                    <li>Select travel date</li>
                    <li>Specify number of passengers</li>
                    <li>Click "Search" button</li>
                  </ul>
                </li>
                <li className="font-medium">
                  View Search Results
                  <ul className="list-disc pl-5 mt-2 font-normal">
                    <li>See list of available buses with departure times</li>
                    <li>View pricing for each option</li>
                    <li>Filter results by time, price, or bus operator</li>
                    <li>
                      If no results, see suggestion to try different dates
                    </li>
                  </ul>
                </li>
                <li className="font-medium">
                  Select Bus/Time
                  <ul className="list-disc pl-5 mt-2 font-normal">
                    <li>Click on preferred bus option</li>
                    <li>
                      View detailed information (bus type, amenities, etc.)
                    </li>
                    <li>Proceed to seat selection</li>
                  </ul>
                </li>
              </ol>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>2. Booking Process</CardTitle>
              <CardDescription>
                Steps to select seats and complete booking details
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ol className="list-decimal pl-5 space-y-4" start={5}>
                <li className="font-medium">
                  View Seat Map
                  <ul className="list-disc pl-5 mt-2 font-normal">
                    <li>See interactive bus seat layout</li>
                    <li>
                      Identify available (green), selected (blue), and
                      unavailable (gray) seats
                    </li>
                    <li>View seat pricing if different prices exist</li>
                  </ul>
                </li>
                <li className="font-medium">
                  Select Seat(s)
                  <ul className="list-disc pl-5 mt-2 font-normal">
                    <li>Click on available seats to select</li>
                    <li>Click again to deselect if needed</li>
                    <li>See running total of selected seats and cost</li>
                    <li>Click "Continue" when selection is complete</li>
                  </ul>
                </li>
                <li className="font-medium">
                  Enter Passenger Details
                  <ul className="list-disc pl-5 mt-2 font-normal">
                    <li>Fill in contact information (name, phone, email)</li>
                    <li>
                      Enter details for each passenger if multiple tickets
                    </li>
                    <li>Add any special requests or requirements</li>
                    <li>Accept terms and conditions</li>
                  </ul>
                </li>
                <li className="font-medium">
                  Review Booking
                  <ul className="list-disc pl-5 mt-2 font-normal">
                    <li>Verify all trip details (route, date, time)</li>
                    <li>Confirm seat selection</li>
                    <li>Review passenger information</li>
                    <li>Check total cost breakdown</li>
                    <li>Click "Confirm & Pay" to proceed</li>
                  </ul>
                </li>
              </ol>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>3. Payment & Confirmation</CardTitle>
              <CardDescription>
                Steps to complete payment and receive tickets
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ol className="list-decimal pl-5 space-y-4" start={9}>
                <li className="font-medium">
                  Select Payment Method
                  <ul className="list-disc pl-5 mt-2 font-normal">
                    <li>Choose from available mobile money options:</li>
                    <li>MTN Mobile Money</li>
                    <li>Vodafone Cash</li>
                    <li>AirtelTigo Money</li>
                  </ul>
                </li>
                <li className="font-medium">
                  Complete Payment Flow
                  <ul className="list-disc pl-5 mt-2 font-normal">
                    <li>Enter mobile money number</li>
                    <li>Confirm payment amount</li>
                    <li>Receive payment prompt on phone</li>
                    <li>Enter PIN to authorize payment</li>
                    <li>Wait for payment confirmation</li>
                  </ul>
                </li>
                <li className="font-medium">
                  Receive Digital Ticket
                  <ul className="list-disc pl-5 mt-2 font-normal">
                    <li>View booking confirmation screen</li>
                    <li>Receive digital ticket with QR code</li>
                    <li>Get ticket sent via email and SMS</li>
                    <li>View booking reference number</li>
                  </ul>
                </li>
                <li className="font-medium">
                  Manage Booking
                  <ul className="list-disc pl-5 mt-2 font-normal">
                    <li>Access "My Tickets" section</li>
                    <li>View upcoming and past trips</li>
                    <li>Download or share ticket</li>
                    <li>Request modifications if needed (subject to policy)</li>
                  </ul>
                </li>
              </ol>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>4. Travel Day</CardTitle>
              <CardDescription>
                Steps for using the ticket on travel day
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ol className="list-decimal pl-5 space-y-4" start={13}>
                <li className="font-medium">
                  Prepare for Travel
                  <ul className="list-disc pl-5 mt-2 font-normal">
                    <li>Receive travel reminder notification</li>
                    <li>Access digital ticket from app or email</li>
                    <li>Arrive at bus terminal at recommended time</li>
                  </ul>
                </li>
                <li className="font-medium">
                  Board the Bus
                  <ul className="list-disc pl-5 mt-2 font-normal">
                    <li>Present QR code to bus operator</li>
                    <li>Get ticket validated by scanning</li>
                    <li>Receive seat confirmation</li>
                    <li>Board the bus and locate assigned seat</li>
                  </ul>
                </li>
                <li className="font-medium">
                  Post-Travel
                  <ul className="list-disc pl-5 mt-2 font-normal">
                    <li>Receive request to rate the journey</li>
                    <li>View trip in travel history</li>
                    <li>Access receipt for expense purposes</li>
                    <li>View loyalty points earned (if applicable)</li>
                  </ul>
                </li>
              </ol>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="admin" className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>1. Authentication & Dashboard</CardTitle>
              <CardDescription>Initial steps for admin users</CardDescription>
            </CardHeader>
            <CardContent>
              <ol className="list-decimal pl-5 space-y-4">
                <li className="font-medium">
                  Login to Admin Portal
                  <ul className="list-disc pl-5 mt-2 font-normal">
                    <li>Access admin login page</li>
                    <li>Enter credentials (username/email and password)</li>
                    <li>Complete two-factor authentication if enabled</li>
                  </ul>
                </li>
                <li className="font-medium">
                  Dashboard Home
                  <ul className="list-disc pl-5 mt-2 font-normal">
                    <li>View key metrics (daily sales, active buses, etc.)</li>
                    <li>See upcoming departures for the day</li>
                    <li>Access quick links to common tasks</li>
                    <li>View notifications and alerts</li>
                  </ul>
                </li>
                <li className="font-medium">
                  Navigation
                  <ul className="list-disc pl-5 mt-2 font-normal">
                    <li>Access sidebar menu with all admin functions</li>
                    <li>Switch between different management sections</li>
                    <li>Access user profile and settings</li>
                  </ul>
                </li>
              </ol>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>2. Route Management</CardTitle>
              <CardDescription>Steps for managing bus routes</CardDescription>
            </CardHeader>
            <CardContent>
              <ol className="list-decimal pl-5 space-y-4" start={4}>
                <li className="font-medium">
                  View Routes
                  <ul className="list-disc pl-5 mt-2 font-normal">
                    <li>Access route management section</li>
                    <li>View list of all existing routes</li>
                    <li>Filter and search routes</li>
                    <li>See route status (active/inactive)</li>
                  </ul>
                </li>
                <li className="font-medium">
                  Add New Route
                  <ul className="list-disc pl-5 mt-2 font-normal">
                    <li>Click "Add New Route" button</li>
                    <li>Enter origin and destination</li>
                    <li>Set distance and estimated travel time</li>
                    <li>Add route description and stops</li>
                    <li>Set base pricing</li>
                    <li>Save new route</li>
                  </ul>
                </li>
                <li className="font-medium">
                  Edit Existing Route
                  <ul className="list-disc pl-5 mt-2 font-normal">
                    <li>Select route from list</li>
                    <li>Modify route details as needed</li>
                    <li>Update pricing or travel information</li>
                    <li>Save changes</li>
                  </ul>
                </li>
                <li className="font-medium">
                  Delete/Deactivate Route
                  <ul className="list-disc pl-5 mt-2 font-normal">
                    <li>Select route from list</li>
                    <li>
                      Choose to deactivate (temporary) or delete (permanent)
                    </li>
                    <li>Confirm action</li>
                    <li>Handle existing bookings if any</li>
                  </ul>
                </li>
              </ol>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>3. Bus Scheduling</CardTitle>
              <CardDescription>
                Steps for managing bus schedules
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ol className="list-decimal pl-5 space-y-4" start={8}>
                <li className="font-medium">
                  View Schedules
                  <ul className="list-disc pl-5 mt-2 font-normal">
                    <li>Access schedule management section</li>
                    <li>View calendar of all scheduled buses</li>
                    <li>Filter by route, date range, or bus</li>
                    <li>
                      See schedule status (scheduled, departed, completed,
                      cancelled)
                    </li>
                  </ul>
                </li>
                <li className="font-medium">
                  Add Bus Schedule
                  <ul className="list-disc pl-5 mt-2 font-normal">
                    <li>Click "Add Schedule" button</li>
                    <li>Select route from dropdown</li>
                    <li>
                      Assign bus (with details like registration, capacity)
                    </li>
                    <li>Set departure date and time</li>
                    <li>Assign driver(s)</li>
                    <li>Set special instructions if any</li>
                    <li>Save schedule</li>
                  </ul>
                </li>
                <li className="font-medium">
                  Edit Schedule
                  <ul className="list-disc pl-5 mt-2 font-normal">
                    <li>Select schedule from calendar/list</li>
                    <li>Modify details as needed</li>
                    <li>Update departure time or bus assignment</li>
                    <li>Save changes</li>
                    <li>Option to notify booked passengers of changes</li>
                  </ul>
                </li>
                <li className="font-medium">
                  Cancel Schedule
                  <ul className="list-disc pl-5 mt-2 font-normal">
                    <li>Select schedule from calendar/list</li>
                    <li>Click "Cancel" option</li>
                    <li>Enter reason for cancellation</li>
                    <li>Confirm action</li>
                    <li>Process for handling existing bookings</li>
                    <li>Send notifications to affected passengers</li>
                  </ul>
                </li>
              </ol>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>4. Ticket Management</CardTitle>
              <CardDescription>
                Steps for managing ticket inventory and sales
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ol className="list-decimal pl-5 space-y-4" start={12}>
                <li className="font-medium">
                  Manage Ticket Inventory
                  <ul className="list-disc pl-5 mt-2 font-normal">
                    <li>Access ticket inventory section</li>
                    <li>View available seats by schedule</li>
                    <li>See booking status for each seat</li>
                    <li>Block or release seats as needed</li>
                  </ul>
                </li>
                <li className="font-medium">
                  Set Pricing
                  <ul className="list-disc pl-5 mt-2 font-normal">
                    <li>Access pricing management</li>
                    <li>Set base prices for routes</li>
                    <li>Configure dynamic pricing rules</li>
                    <li>Set special pricing for holidays or events</li>
                    <li>Configure seat-specific pricing if applicable</li>
                  </ul>
                </li>
                <li className="font-medium">
                  Apply Discounts
                  <ul className="list-disc pl-5 mt-2 font-normal">
                    <li>Create discount codes or promotions</li>
                    <li>Set discount parameters (percentage, fixed amount)</li>
                    <li>Define eligibility criteria</li>
                    <li>Set validity period</li>
                    <li>Activate or deactivate promotions</li>
                  </ul>
                </li>
                <li className="font-medium">
                  Manual Booking Management
                  <ul className="list-disc pl-5 mt-2 font-normal">
                    <li>Create bookings for walk-in customers</li>
                    <li>Process ticket modifications or cancellations</li>
                    <li>Issue refunds when applicable</li>
                    <li>Print physical tickets if needed</li>
                  </ul>
                </li>
              </ol>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>5. Sales Analytics</CardTitle>
              <CardDescription>
                Steps for viewing and analyzing sales data
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ol className="list-decimal pl-5 space-y-4" start={16}>
                <li className="font-medium">
                  View Daily Sales
                  <ul className="list-disc pl-5 mt-2 font-normal">
                    <li>Access sales dashboard</li>
                    <li>View today's ticket sales and revenue</li>
                    <li>See breakdown by route and payment method</li>
                    <li>Compare to previous periods</li>
                  </ul>
                </li>
                <li className="font-medium">
                  View Route Performance
                  <ul className="list-disc pl-5 mt-2 font-normal">
                    <li>Access route analytics</li>
                    <li>View performance metrics by route</li>
                    <li>See occupancy rates and revenue</li>
                    <li>Identify high and low-performing routes</li>
                    <li>Analyze seasonal trends</li>
                  </ul>
                </li>
                <li className="font-medium">
                  Generate Reports
                  <ul className="list-disc pl-5 mt-2 font-normal">
                    <li>Access reporting section</li>
                    <li>Select report type (sales, occupancy, etc.)</li>
                    <li>Set date range and parameters</li>
                    <li>Generate report in desired format</li>
                    <li>Export to PDF, Excel, or CSV</li>
                  </ul>
                </li>
                <li className="font-medium">
                  Forecast and Planning
                  <ul className="list-disc pl-5 mt-2 font-normal">
                    <li>View predictive analytics</li>
                    <li>See forecasted demand for routes</li>
                    <li>Identify opportunities for new routes</li>
                    <li>Plan capacity adjustments based on trends</li>
                  </ul>
                </li>
              </ol>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default UserFlow;
