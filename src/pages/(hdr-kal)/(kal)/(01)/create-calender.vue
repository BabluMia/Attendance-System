<template>
  <div class="p-4">
    <DxForm :formData="formData" :colCount="2">
      <DxSimpleItem
        dataField="calendarName"
        editorType="dxTextBox"
        :label="{ text: 'Calendar Name' }"
      />
      <DxSimpleItem
        dataField="calendarCategoryId"
        editorType="dxSelectBox"
        :editorOptions="{ items: calendarCategoryOptions, displayExpr: 'name', valueExpr: 'id' }"
        :label="{ text: 'Calendar Category' }"
      />

      <DxSimpleItem
        dataField="calendarGroupId"
        editorType="dxSelectBox"
        :editorOptions="{
          items: groupOptions,
          displayExpr: 'name',
          valueExpr: 'id',
        }"
        :label="{ text: 'Calendar Group' }"
      />

      <DxSimpleItem
        dataField="shiftTypeId"
        editorType="dxSelectBox"
        :editorOptions="{ items: shiftTypeOptions, displayExpr: 'name', valueExpr: 'id' }"
        :label="{ text: 'Shift Type' }"
      />

      <!-- Rest Break -->
      <DxSimpleItem :label="{ text: 'Rest Break Start Date' }">
        <DxDateBox v-model="formData.restBreak.startDate" type="date" displayFormat="yyyy-MM-dd" />
      </DxSimpleItem>
      <DxSimpleItem :label="{ text: 'Rest Break End Date' }">
        <DxDateBox v-model="formData.restBreak.endDate" type="date" displayFormat="yyyy-MM-dd" />
      </DxSimpleItem>

      <!-- Term Break -->
      <DxGroupItem caption="Term Breaks" :colCount="2">
        <DxSimpleItem :label="{ text: formData.termBreaks[0].title + ' Start Date' }">
          <DxDateBox
            v-model="formData.termBreaks[0].startDate"
            type="date"
            displayFormat="yyyy-MM-dd"
          />
        </DxSimpleItem>
        <DxSimpleItem :label="{ text: formData.termBreaks[0].title + ' End Date' }">
          <DxDateBox
            v-model="formData.termBreaks[0].endDate"
            type="date"
            displayFormat="yyyy-MM-dd"
          />
        </DxSimpleItem>
        <DxSimpleItem :label="{ text: formData.termBreaks[1].title + ' Start Date' }">
          <DxDateBox
            v-model="formData.termBreaks[1].startDate"
            type="date"
            displayFormat="yyyy-MM-dd"
          />
        </DxSimpleItem>
        <DxSimpleItem :label="{ text: formData.termBreaks[1].title + ' End Date' }">
          <DxDateBox
            v-model="formData.termBreaks[1].endDate"
            type="date"
            displayFormat="yyyy-MM-dd"
          />
        </DxSimpleItem>
      </DxGroupItem>

      <!-- Holiday Events -->
      <DxGroupItem caption="Holiday Events">
        <template v-for="(event, index) in formData.holidayEvents" :key="index">
          <DxSimpleItem :label="{ text: event.title }">
            <DxDateBox v-model="event.date" type="date" displayFormat="yyyy-MM-dd" />
          </DxSimpleItem>
        </template>
      </DxGroupItem>

      <!-- Weekly Settings -->
      <DxSimpleItem
        dataField="weeklyRestDay"
        editorType="dxSelectBox"
        :editorOptions="{ items: weekDays, displayExpr: 'name', valueExpr: 'id' }"
        :label="{ text: 'Weekly Rest Day' }"
      />
      <DxSimpleItem
        dataField="weeklyHoliday"
        editorType="dxSelectBox"
        :editorOptions="{ items: weekDays, displayExpr: 'name', valueExpr: 'id' }"
        :label="{ text: 'Weekly Holiday' }"
      />

      <!-- Multi Select Popups -->
      <DxSimpleItem :label="{ text: 'States' }">
        <div class="flex items-center">
          <span class="mr-2">{{ selectedStateIds.length }} selected</span>
          <DxButton text="Select States" @click="openStatePopup = true" />
        </div>
      </DxSimpleItem>

      <DxSimpleItem :label="{ text: 'Agencies' }">
        <div class="flex items-center">
          <span class="mr-2">{{ selectedAgencyIds.length }} selected</span>
          <DxButton text="Select Agencies" @click="openAgencyPopup = true" />
        </div>
      </DxSimpleItem>

      <DxSimpleItem
        dataField="isSpecialHoliday"
        editorType="dxCheckBox"
        :label="{ text: 'Is Special Holiday?' }"
      />

      <!-- Special Holiday Agencies (conditionally shown) -->
      <DxSimpleItem v-if="formData.isSpecialHoliday" :label="{ text: 'Special Holiday Agencies' }">
        <div class="flex items-center">
          <span class="mr-2">{{ specialHolidayAgencyIds.length }} selected</span>
          <DxButton text="Select Special Agencies" @click="openSpecialAgencyPopup = true" />
        </div>
      </DxSimpleItem>
    </DxForm>

    <!-- Popups for multi-select components -->
    <DxPopup v-model:visible="openStatePopup" title="Select States" width="400" height="500">
      <div class="p-4">
        <div v-for="option in stateOptions" :key="option.id" class="flex items-center mb-2">
          <DxCheckBox
            :value="selectedStateIds.includes(Number(option.id))"
            @valueChanged="(e) => toggleStateSelection(Number(option.id), e.value)"
          />
          <span @click="toggleStateSelection(Number(option.id))" class="ml-2 cursor-pointer">
            {{ option.name }}
          </span>
        </div>
      </div>
      <div class="p-3 flex justify-end">
        <DxButton text="Close" @click="closeStatePopup" />
      </div>
    </DxPopup>

    <DxPopup v-model:visible="openAgencyPopup" title="Select Agencies" width="400" height="500">
      <div class="p-4">
        <div v-for="option in agencyOptions" :key="option.id" class="flex items-center mb-2">
          <DxCheckBox
            :value="selectedAgencyIds.includes(Number(option.id))"
            @valueChanged="(e) => toggleAgencySelection(Number(option.id), e.value)"
          />
          <span @click="toggleAgencySelection(Number(option.id))" class="ml-2 cursor-pointer">
            {{ option.name }}
          </span>
        </div>
      </div>
      <div class="p-3 flex justify-end">
        <DxButton text="Close" @click="closeAgencyPopup" />
      </div>
    </DxPopup>

    <!-- Special Holiday Agencies Popup -->
    <DxPopup
      v-model:visible="openSpecialAgencyPopup"
      title="Select Special Holiday Agencies"
      width="400"
      height="500"
    >
      <div class="p-4">
        <div v-for="option in agencyOptions" :key="option.id" class="flex items-center mb-2">
          <DxCheckBox
            :value="specialHolidayAgencyIds.includes(Number(option.id))"
            @valueChanged="(e) => toggleSpecialAgencySelection(Number(option.id), e.value)"
          />
          <span
            @click="toggleSpecialAgencySelection(Number(option.id))"
            class="ml-2 cursor-pointer"
          >
            {{ option.name }}
          </span>
        </div>
      </div>
      <div class="p-3 flex justify-end">
        <DxButton text="Close" @click="closeSpecialAgencyPopup" />
      </div>
    </DxPopup>

    <!-- Action Buttons -->
    <div class="mt-6 flex justify-end space-x-4">
      <DxButton text="Return" type="normal" stylingMode="outlined" @click="goBack" />
      <DxButton text="Save" type="success" stylingMode="contained" @click="saveCalendar" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from "vue";
import { useRouter } from "vue-router";
import DxForm from "devextreme-vue/form";
import { DxSimpleItem, DxGroupItem } from "devextreme-vue/form";
import DxDateBox from "devextreme-vue/date-box";
import DxButton from "devextreme-vue/button";
import DxPopup from "devextreme-vue/popup";
import DxCheckBox from "devextreme-vue/check-box";
import notify from "devextreme/ui/notify";
import {
  calendarCategoryOptions,
  groupOptions,
  shiftTypeOptions,
  weekDays,
  stateOptions,
  agencyOptions,
} from "@/stores/calender/data";
import type { CalendarForm } from "@/types/calender";
import { useCalendarStore } from "@/stores/calender/useCalenderStore";

// Router for navigation
const router = useRouter();

// Calendar store for saving data
const calendarStore = useCalendarStore();

// Selected states and agencies
const selectedStateIds = ref<number[]>([]);
const selectedAgencyIds = ref<number[]>([]);
const specialHolidayAgencyIds = ref<number[]>([]);

// Form data with static titles for term breaks and holiday events
const formData = ref<CalendarForm>({
  id: 0, // ID will be generated by the store when saving
  calendarName: "",
  calendarCategoryId: 1,
  calendarGroupId: 1,
  shiftTypeId: 1,
  restBreak: { startDate: "", endDate: "" },
  termBreaks: [
    { title: "Term 1", startDate: "", endDate: "" },
    { title: "Term 2", startDate: "", endDate: "" },
  ],
  holidayEvents: [
    { title: "National Day", date: "" },
    { title: "Labour Day", date: "" },
  ],
  weeklyRestDay: "1",
  weeklyHoliday: "7",
  selectedStateIds: [],
  selectedAgencyIds: [],
  isSpecialHoliday: false,
  specialHolidayAgencyIds: [],
  generalHolidays: [],
});

// Popup visibility control
const openStatePopup = ref(false);
const openAgencyPopup = ref(false);
const openSpecialAgencyPopup = ref(false);

// Save the calendar
const saveCalendar = () => {
  try {
    // Create a new calendar by destructuring the id property
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { id, ...calendarData } = formData.value;

    // Format all dates to YYYY-MM-DD format
    if (calendarData.restBreak) {
      calendarData.restBreak.startDate = formatDate(calendarData.restBreak.startDate);
      calendarData.restBreak.endDate = formatDate(calendarData.restBreak.endDate);
    }

    if (calendarData.termBreaks) {
      calendarData.termBreaks.forEach((term) => {
        term.startDate = formatDate(term.startDate);
        term.endDate = formatDate(term.endDate);
      });
    }

    if (calendarData.holidayEvents) {
      calendarData.holidayEvents.forEach((event) => {
        event.date = formatDate(event.date);
      });
    }

    calendarStore.create(calendarData);
    notify({
      message: "Calendar created successfully",
      position: {
        my: "center top",
        at: "center top",
      },
      width: 300,
      type: "success",
    });

    // Go back to the calendar list page
    router.push("/test-kal-01");
  } catch (error) {
    console.error("Error saving calendar:", error);
    // Handle error - could add a notification here
  }
};

// Format date to YYYY-MM-DD
const formatDate = (dateStr: string): string => {
  if (!dateStr) return "";

  const date = new Date(dateStr);
  if (isNaN(date.getTime())) return dateStr; // Return original if invalid

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
};

// Navigate back
const goBack = () => {
  router.push("/test-kal-01");
};

// Watch for changes to isSpecialHoliday
watch(
  () => formData.value.isSpecialHoliday,
  (newVal) => {
    // Reset specialHolidayAgencyIds if isSpecialHoliday is set to false
    if (!newVal) {
      specialHolidayAgencyIds.value = [];
      formData.value.specialHolidayAgencyIds = [];
    }
  }
);

// Popup control methods
const closeStatePopup = () => {
  openStatePopup.value = false;
  // Update form data from selected IDs
  formData.value.selectedStateIds = [...selectedStateIds.value];
};

const closeAgencyPopup = () => {
  openAgencyPopup.value = false;
  // Update form data from selected IDs
  formData.value.selectedAgencyIds = [...selectedAgencyIds.value];
};

const closeSpecialAgencyPopup = () => {
  openSpecialAgencyPopup.value = false;
  // Update form data from selected IDs
  formData.value.specialHolidayAgencyIds = [...specialHolidayAgencyIds.value];
};

// Helper methods for multi-select components
const toggleStateSelection = (id: number, value?: boolean) => {
  if (value === undefined) {
    // Toggle the current state when clicking on the label
    const isSelected = selectedStateIds.value.includes(id);
    toggleStateSelection(id, !isSelected);
    return;
  }

  if (value) {
    if (!selectedStateIds.value.includes(id)) {
      selectedStateIds.value.push(id);
    }
  } else {
    selectedStateIds.value = selectedStateIds.value.filter((i) => i !== id);
  }
};

const toggleAgencySelection = (id: number, value?: boolean) => {
  if (value === undefined) {
    // Toggle the current state when clicking on the label
    const isSelected = selectedAgencyIds.value.includes(id);
    toggleAgencySelection(id, !isSelected);
    return;
  }

  if (value) {
    if (!selectedAgencyIds.value.includes(id)) {
      selectedAgencyIds.value.push(id);
    }
  } else {
    selectedAgencyIds.value = selectedAgencyIds.value.filter((i) => i !== id);
  }
};

const toggleSpecialAgencySelection = (id: number, value?: boolean) => {
  if (value === undefined) {
    // Toggle the current state when clicking on the label
    const isSelected = specialHolidayAgencyIds.value.includes(id);
    toggleSpecialAgencySelection(id, !isSelected);
    return;
  }

  if (value) {
    if (!specialHolidayAgencyIds.value.includes(id)) {
      specialHolidayAgencyIds.value.push(id);
    }
  } else {
    specialHolidayAgencyIds.value = specialHolidayAgencyIds.value.filter((i) => i !== id);
  }
};

onMounted(() => {
  // Initialize the form if needed
});
</script>

<style scoped>
/* Add styling as needed */
</style>
