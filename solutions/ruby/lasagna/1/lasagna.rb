class Lasagna
  # Task 1: Define the expected oven time constant
  EXPECTED_MINUTES_IN_OVEN = 40

  # Task 2: Calculate the remaining oven time in minutes
  def remaining_minutes_in_oven(actual_minutes_in_oven)
    EXPECTED_MINUTES_IN_OVEN - actual_minutes_in_oven
  end

  # Task 3: Calculate the preparation time in minutes (2 minutes per layer)
  def preparation_time_in_minutes(layers)
    layers * 2
  end

  # Task 4: Calculate the total working time in minutes using keyword arguments
  def total_time_in_minutes(number_of_layers:, actual_minutes_in_oven:)
    preparation_time_in_minutes(number_of_layers) + actual_minutes_in_oven
  end
end
