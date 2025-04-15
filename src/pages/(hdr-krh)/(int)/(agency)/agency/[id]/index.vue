<template>
  <div class="p-4">
    <div class="border border-gray-300 rounded-lg p-6">
      <div class="flex items-center justify-between mb-6">
        <h2 class="text-lg font-semibold">{{ agencyName }} - Employee Attendance Records</h2>
        <NuxtLink to="/agency" class="text-blue-600 flex items-center gap-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
            />
          </svg>
          <span>Back to Agencies</span>
        </NuxtLink>
      </div>

      <!-- Loading Indicator -->
      <div v-if="loading" class="flex justify-center my-10">
        <div class="spinner"></div>
      </div>

      <!-- No Results Message -->
      <div
        v-else-if="filteredEmployees.length === 0"
        class="text-center py-10 bg-gray-50 rounded-lg"
      >
        <div class="text-gray-500 mb-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-12 w-12 mx-auto mb-3"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="1"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <h3 class="text-lg font-medium">No Employee Records Found</h3>
          <p class="text-sm">No employee data available for this agency</p>
        </div>
      </div>

      <!-- Employee Data Grid -->
      <DxDataGrid
        v-else
        id="employees"
        :data-source="filteredEmployees"
        :show-borders="false"
        :column-auto-width="true"
        :word-wrap-enabled="true"
        key-expr="id"
        class="rounded-lg overflow-hidden shadow-lg w-full"
      >
        <DxSearchPanel :visible="true" :width="300" placeholder="Search records..." />
        <DxHeaderFilter :visible="true" />
        <DxSelection mode="multiple" />
        <DxScrolling mode="standard" />
        <DxPaging :enabled="true" :page-size="10" />
        <DxPager
          :show-page-size-selector="true"
          :allowed-page-sizes="[5, 10, 20]"
          :show-info="true"
          :visible="true"
          position="bottom"
        />
        <DxColumn type="selection" :width="40" />

        <DxColumn data-field="employee_name" caption="Name" :width="180" />
        <DxColumn data-field="identification_number" caption="ID" :width="120" />
        <DxColumn data-field="date_time_get_to_work" caption="Get To Work" :width="160" />
        <DxColumn data-field="date_time_out_of_office" caption="Leave Office" :width="160" />
        <DxColumn data-field="date_time_reenter_office" caption="Reenter Office" :width="160" />
        <DxColumn data-field="date_time_back_to_work" caption="Back To Work" :width="160" />
        <DxColumn
          data-field="status_presence"
          caption="Status"
          :width="120"
          :cell-template="statusCellTemplate"
        />
      </DxDataGrid>
    </div>
  </div>
</template>

<script setup lang="ts">
import DxDataGrid, {
  DxColumn,
  DxPaging,
  DxPager,
  DxSelection,
  DxScrolling,
  DxSearchPanel,
  DxHeaderFilter,
} from "devextreme-vue/data-grid";
import "devextreme/dist/css/dx.light.css";
import { useAgencyEmployees } from "@/composables/useAgencyEmployees";

// Define employee data type
interface EmployeeData {
  id: number;
  employee_name: string;
  identification_number: string;
  date_time_get_to_work: string;
  date_time_out_of_office: string;
  date_time_reenter_office: string;
  date_time_back_to_work: string;
  status_presence: string;
  type_noncompliance: string;
  agencyId: number;
  agencyName: string;
}

// Use the composable to get all the functionality
const { agencyName, filteredEmployees, loading } = useAgencyEmployees();

// Status cell template with colored badges
const statusCellTemplate = (cellElement: HTMLElement, cellInfo: { data: EmployeeData }) => {
  const status = cellInfo.data.status_presence;
  let className = "";

  switch (status) {
    case "Present":
      className = "bg-green-100 text-green-800";
      break;
    case "Late":
      className = "bg-yellow-100 text-yellow-800";
      break;
    case "Absent":
      className = "bg-red-100 text-red-800";
      break;
    default:
      className = "bg-gray-100 text-gray-800";
  }

  cellElement.innerHTML = `
    <div class="px-2 py-1 rounded-full text-xs font-medium ${className}">
      ${status}
    </div>
  `;
};
</script>

<style scoped>
/* Custom styling for the data grid */
:deep(.dx-datagrid) {
  border-radius: 0.5rem;
  overflow: hidden;
}

:deep(.dx-datagrid-headers) {
  background-color: #f8fafc;
  font-weight: 600;
  color: #1e293b;
}

:deep(.dx-row.dx-data-row.dx-state-hover) {
  background-color: #f1f5f9;
}

:deep(.dx-datagrid-rowsview .dx-row-alt) {
  background-color: #f8fafc;
}

/* Fix pagination alignment */
:deep(.dx-pager) {
  padding: 0.75rem 1rem;
}

/* Spinner for loading state */
.spinner {
  width: 40px;
  height: 40px;
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-radius: 50%;
  border-top-color: #3498db;
  animation: spin 1s ease-in-out infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>
