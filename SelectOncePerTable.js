(function($) {

	// Disable options that are selected in the same column in another row of the Table
	function disableSelectedOptions($inputfield) {
		var columns = $inputfield.data('select-once').split(',');
		var field_name = $inputfield.attr('id').replace('wrap_Inputfield_', '');
		columns.forEach(function(column) {
			// As a first pass, get all selects in the inputfield whose name attribute ends with the column name
			var $selects = $inputfield.find('tr:not(.InputfieldTableRowTemplate) select[name$=' + column + ']');
			// Filter out any selects whose name doesn't conform to the correct format
			$selects = $selects.filter(function() {
				// When the field name and the column name are removed only an integer should be left over
				var name_int = $(this).attr('name').replace(field_name + '_', '').replace('_' + column, '');
				return !isNaN(+name_int);
			});
			// Enable any previously disabled options
			$selects.find('option').prop('disabled', false);
			// Disable selected options in other selects of the same column
			$selects.each(function() {
				var value = $(this).val();
				if(!value) return;
				$selects.not(this).find('option[value="' + value + '"]').prop('disabled', true);
			});
		});
	}

	$(document).ready(function() {

		// Disable selected options on DOM ready
		$('.InputfieldTable[data-select-once]').each(function() {
			disableSelectedOptions($(this));
		});

		// Disable selected options when inputfield reloaded
		$(document).on('reloaded', '.InputfieldTable[data-select-once]', function() {
			disableSelectedOptions($(this));
		});

		// Disable selected options when a relevant select is changed
		$(document).on('change', '.InputfieldTable[data-select-once] select', function() {
			disableSelectedOptions($(this).closest('li.InputfieldTable'));
		});

		// Disable selected options when a new row is added
		$(document).on('click', '.InputfieldTable[data-select-once] .InputfieldTableAddRow', function() {
			disableSelectedOptions($(this).closest('li.InputfieldTable'));
		});

	});

}(jQuery));
