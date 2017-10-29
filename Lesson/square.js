/**
 * http://usejsdoc.org/
 */
module.exports = function(width) {
    return {
        area: function() {
            return width * width;
        },
    	circumference: function() {
    		return width * 4;
		}
    };
}