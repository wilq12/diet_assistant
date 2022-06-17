import { Component } from '@angular/core';
import { diet_log_add_entry } from 'src/diet_assistant/functions/diet_log_add_entry';
import { diet_log_entry_new } from 'src/diet_assistant/functions/diet_log_entry_new';
import { get_current_demand } from 'src/diet_assistant/functions/get_current_demand';
import { initialize_new_day } from 'src/diet_assistant/functions/initialize_new_day';
import { load_state } from 'src/diet_assistant/functions/load_state';
import { elements } from 'src/diet_assistant/types/elements';
import { persist_state } from 'src/diet_assistant/functions/persist_state';
import { reset_state } from 'src/diet_assistant/functions/reset_state';
import { get_suggested_ingredients } from 'src/diet_assistant/functions/get_suggested_ingredients';
import { get_suggested_consumption } from 'src/diet_assistant/functions/get_suggested_consumption';
import { timestamp_now } from 'src/diet_assistant/functions/timestamp_now';
import { timespan_hours } from 'src/diet_assistant/functions/timespan_hours';
import { timestamp_increase } from 'src/diet_assistant/functions/timestamp_increase';
import { diet_log_remove_entry } from 'src/diet_assistant/functions/diet_log_remove_entry';
import { state } from 'src/diet_assistant/state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'diet-assistant';

  current_demand!: elements
  constructor() {
    load_state()
    setInterval(() => {
      this.current_demand = get_current_demand()
      persist_state()
    }, 100)
  }

  add_diet_log_entry = diet_log_add_entry
  new_diet_log_entry = diet_log_entry_new
  get_current_demand = get_current_demand
  initialize_new_day = initialize_new_day
  reset_state = reset_state
  get_suggseted_ingredients = get_suggested_ingredients
  get_suggested_consumption = get_suggested_consumption
  timestamp_now = timestamp_now
  timespan_hours = timespan_hours
  timestamp_increase = timestamp_increase
  remove_diet_log_entry = diet_log_remove_entry
  JSON = JSON
  get state() {
    return state
  } 
}
