// Global variables
var SCIENCE_UNITS_REQUIREMENT = 12;
var MATH_UNITS_REQUIREMENT = 28;
var TOPICS_UNITS_REQUIREMENT = 60;
var UNIVERSITY_UNITS_REQUIREMENT = 180;
var FUNDAMENTALS_COURSES_REQUIREMENT = 3;
var FUNDAMENTALS_COURSES_MAX = 5;
var SPECIALTY_COURSES_REQUIREMENT = 4;
var SPECIALTY_UNITS_REQUIREMENT = 14;
var EE191_UNITS_MAX = 10;
var EE_TOPICS_COURSE_NUMBER_MIN = 100;
var EE101B_UNITS = 4;
var EE102B_UNITS = 4;
var EE108B_UNITS = 4;
var EE264_UNITS = 3;
var EE265_UNITS = 4;
var EE284_UNITS = 3;
var EE141_UNITS = 3;
var CS144_UNITS = 4;
var MUSIC320_UNITS = 4;

var subjectAbbreviationsArray = ["acct","mgtecon","finance","gsbgen","hrmgt","mktg","oit","ob","polecon","stramgt","earthsci","earthsys","eees","energy","envres","eess","ges","geophys","envrinst","educ","aa","bioe","chemeng","cee","cme","cs","ee","engr","ms&e","matsci","me","sccm","africaam","amelang","africast","amstud","anthro","appphys","arablang","archlgy","arthist","artstudi","asnamst","asnlang","astrnmy","athletic","bio","biohopk","biophys","catlang","chem","chilatst","chicanst","chingen","chinlang","chinlit","classart","classgen","classgrk","classhis","classlat","comm","complit","csre","dance","dlcl","taps","drama","eastasn","econ","english","efslang","ethicsoc","femst","filmprod","filmstud","frengen","frenlang","frenlit","french","gergen","gerlang","gerlit","german","history","hps","humbio","humsci","ilac","iberlang","fsi","iis","humnties","ips","intnlrel","italgen","itallang","itallit","italian","japangen","japanlng","japanlit","jewishst","korgen","korlang","latinam","linguist","mcs","math","medvlst","mtl","music","nativeam","phil","physics","polisci","portlang","psych","publpol","religst","rees","sts","slavgen","slavlang","slavlit","slavic","soc","spanlang","ilac","speclang","siw","stats","symsys","tibetlng","urbanst","law","lawgen","anes","bioc","biomedin","cbio","cts","csb","compmed","derm","dbio","fammed","gene","hrp","immunol","med","inde","mi","mcp","nbio","nens","nepr","nsur","obgyn","opht","ortho","otohns","path","peds","psyc","rado","rad","somgen","stemrem","sbio","surg","urol","ctl","ihum","ospgen","ospaustl","casb","ospbarcl","ospbeij","ospber","ospcptwn","ospflor","ospkyoto","kcjs","ospkyoct","ospmadrd","ospmosc","ospoxfrd","ospparis","ospsantg","rotcaf","rotcarmy","rotcnavy","sle","think","uar","pwr","mla"];

// Array of all courses that fulfill the SOE math requirement
var mathArray = ["math19","math20", "math21", "math41", "math42", "math51", "math51m", "math52", "math53", "math41a", "math42a", "math51a", "math52a", "math53a", "math51h", "math52h", "math53h", "math104", "math106", "math109", "math113", "math115", "math120", "math121", "math131p", "math132", "cme100", "cme102", "cme104", "cme100a", "cme102a", "cme104a", "cme108", "cs103", "cs109", "cee101d", "cee201d", "cee203", "engr62", "engr154", "engr155a", "engr155b", "engr155c", "ms&e121", "ms&e120", "stats60", "stats110", "stats116", "ee178", "ee102b"];

// Array of all courses that fulfill the SOE science requirement
var scienceArray = ["bio41", "bio42", "bio43", "cee63", "cee64", "cee70", "chem31a", "chem31b", "chem31x", "chem33", "chem35", "chem36", "chem131", "chem135", "earthsys10", "engr31", "ges1a", "ges1b", "ges1c", "physics21", "physics23", "physics25", "physics41", "physics43", "physics45", "physics42", "physics44", "physics46", "physics61", "physics63", "physics65", "physics62", "physics64", "physics67"];

// Array of all courses that fulfill the SOE science requirement when not taken for a letter grade (letter grade not offered)
var scienceNoLetterGradeArray = ["physics42", "physics44", "physics46", "physics62", "physics64", "physics67"];

// Array of all courses that fulfill the SOE Technology in Society requirement
var tisArray = ["sts101", "sts201", "engr130", "sts101q", "sts110", "sts112", "sts115", "bioe131", "cs181", "cs181w", "engr145", "humbio174", "ms&e181", "ms&e193", "polisci114s", "publpol194"];

// Array of all courses that fulfill the EE WIM requirement
var wimArray = ["ee109", "ee133", "ee134", "ee168", "ee191w", "ee262", "cs194w", "engr102e"];

// Array of all courses that fulfill the EE core requirement
var coreArray = ["ee100", "ee101a", "ee102a", "ee108a"];

// Array of all courses that fulfill the SOE Engineering Fundamentals requirement
var fundamentalsArray = ["engr10", "engr14", "engr15", "engr20", "cheme20", "engr25b", "cheme25b", "engr25e", "cheme25e", "engr30", "engr40", "engr40n", "engr40p", "ee41", "engr50", "engr50e", "engr50m", "engr60", "engr62", "ms&e111","engr70b", "cs106b", "engr70x", "cs106x", "engr80", "engr90", "cee70"];

// Array of all courses that fulfill the Physics in EE requirement
var physicsArray = ["ee41", "engr40p", "ee141"];

// Arrays of all courses that fulfill the various Specialty Sequences
var bioelectronicsAndBioimagingArray = ["ee101b", "ee102b", "ee122b", "ee124", "ee134", "ee168", "ee169", "ee202", "ee225"];

var circuitsAndDevicesArray = ["ee101b", "ee114", "ee116", "ee122a", "ee133", "ee152", "ee212", "ee214b", "ee216", "ee271"];

var computerHardwareArray = ["ee108b", "ee109", "ee152", "ee271", "ee273", "ee282", "cs107"];

var computerSoftwareArray = ["ee108b", "ee152", "cs107", "cs108", "cs110", "cs140", "cs143", "cs145", "cs148", "cs194w", "ee284", "cs144"];

var musicArray = ["ee102b", "ee109", "ee122a", "ee264", "ee265", "music256a", "music256b", "music320", "music420a", "music420b", "music421a", "music422", "music424"];

var energyAndEnvironmentArray = ["ee101b", "ee108b", "ee116", "ee140", "ee151", "ee152", "ee168", "ee134", "ee263", "ee292j", "ee293a", "ee293b", "cee173a", "cee176a", "cee176b", "engr105", "engr205", "me185", "matsci156"]

var signalProcessingCommunicationsAndControlsArray = ["ee102b", "ee124", "ee133", "ee168", "ee169", "ee179", "ee261", "ee262", "ee263", "ee264", "ee265", "ee276", "ee278b", "ee279", "engr105", "engr205"];

var solidStatePhotonicsAndElectromagneticsArray = ["ee101b", "ee116", "ee134", "ee136", "ee141", "ee216", "ee222", "ee223", "ee228", "ee235", "ee242", "ee247", "ee268"];

// Array of all courses that fulfill the EE Capstone Design requirement
var capstoneArray = ["ee109", "ee133", "ee134", "ee152", "ee168", "ee169", "ee262", "ee265", "cs194w"];

//Array of all EE cognate courses (from MS degree website + cs193 classes)
var cognateArray = ["cee173a", "cee176a", "cee176b", "engr105", "engr205", "me185", "matsci156", "aa244", "aa251", "aa272c", "appphys202", "appphys203", "appphys207", "appphys208", "appphys227", "appphys272", "appphys273", "appphys304", "appphys305", "appphys387", "bioe334", "cs107", "cs108", "cs110", "cs140", "cs143", "cs144", "cs148", "cs193c", "cs193d", "cs193g", "cs193p", "cs193s", "cs194", "cs205a", "cs221", "cs231a", "cs228", "cs229", "cs229a", "cs240", "cs242", "cs243", "cs244", "cs244e", "cs245", "cs248", "cs255", "cs315a", "cs315b", "cs321", "cs343", "cs344", "cs347", "cs348a", "cs348b", "cs448b", "engr105", "engr205", "engr206", "engr207a", "engr207b", "engr209a", "engr210b", "engr240", "engr341", "geophys265", "matsci199", "matsci209", "matsci316", "matsci323", "matsci343", "matsci347", "me358", "ms&e237", "ms&e251", "ms&e310", "ms&e311", "ms&e313", "ms&e321", "ms&e322", "ms&e336", "ms&e338", "ms&e339", "ms&e351", "music420a", "music421a", "music422", "music424", "psych221", "rad226", "stats315a", "stats315b", "stats375"];

// Array of all courses that count as EE191
var ee191Array = ["ee191", "ee191w"];

window.onload=init;

function init() {
	document.getElementById('file_upload_form').onsubmit=function() {
	document.getElementById('file_upload_form').target = 'upload_target'; //'upload_target' is the name of the iframe
	document.getElementById("upload_target").onload = uploadDone; //This function should be called when the iframe has compleated loading
	// That will happen when the file is completely uploaded and the server has returned the data we need.
	}
}

function uploadDone() { //Function will be called when iframe is loaded
	var ret = frames['upload_target'].document.getElementsByTagName("body")[0].innerHTML;
	var data = eval("("+ret+")"); //Parse JSON // Read the below explanations before passing judgment on me
	createPlan(data.pdf_text);
}

function Course(subject, number, quarter, units, grade) {
	this.subject = subject;
	this.number = number;
	this.quarter = quarter;
	this.units = units;
	this.grade = grade;
}

function createPlan(courserankText) {
	clearPlan();
	var courseArray = parseCoursesArray(courserankText);
	checkPlan(courseArray);
	writePlan(courseArray);
}

function clearPlan() {
	var pArray = document.getElementsByTagName("p");
	for(var i = 0; i < pArray.length; i++) {
		if (pArray[i].className.indexOf("course") != -1) {
			pArray[i].parentNode.removeChild(pArray[i]);
			i--;
		}
	}
}

function writePlan(array) {
	for (var i = 0; i < array.length; i++) {
		var box = document.getElementById("quarter_" + array[i].quarter);
		var p1 = document.createElement('P');
		p1.className = "course alignleft";
		p1.appendChild(document.createTextNode(array[i].subject.toUpperCase() + " " + array[i].number.toUpperCase()));
		box.appendChild(p1);
		var p2 = document.createElement('P');
		p2.className = "course alignright";
		p2.appendChild(document.createTextNode(array[i].grade.toUpperCase()));
		box.appendChild(p2);
	}
}

function checkPlan(course_array) {
	document.getElementById("math_science").style.color = meetsMathScience(course_array) ? "#57C315" : "red";
	document.getElementById("tis").style.color = meetsTIS(course_array) ? "#57C315" : "red";
	document.getElementById("wim").style.color = meetsWIM(course_array) ? "#57C315" : "red";
	document.getElementById("fundamentals").style.color = meetsFundamentals(course_array) ? "#57C315" : "red";
	document.getElementById("ee_core").style.color = meetsCore(course_array) ? "#57C315" : "red";
	document.getElementById("ee_physics").style.color = meetsPhysics(course_array) ? "#57C315" : "red";
	document.getElementById("ee_specialty").style.color = meetsSpecialty(course_array) ? "#57C315" : "red";
	document.getElementById("ee_capstone").style.color = meetsCapstone(course_array) ? "#57C315" : "red";
	document.getElementById("ee_topics").style.color = meetsTopics(course_array) ? "#57C315" : "red";	
}

function parseCoursesArray(courserank_text) {
	courserank_text = courserank_text.replace(/&amp;/g, '&');
	courserank_text = courserank_text.toLowerCase();

	var course_array = [];
	//create array of tokens delimited by spaces. Suitable for parsing course subjects and numbers
	var courserank_array_subject_number = courserank_text.match(/([\w,.&\-+]*)/g);
	removeEmptyStrings(courserank_array_subject_number);
	//create array of tokens delimited by newlines
	var courserank_array_units_grade = [];
	var courserank_array_block = courserank_text.split("units grade");
	for (var i = 1; i < courserank_array_block.length; i++) {
		var token_array = courserank_array_block[i].split("\n");
		removeEmptyStrings(token_array);
		removeNonUnitsGradesStrings(token_array);
		removeNewQuarterStrings(token_array);
		for (var j = 0; j < token_array.length; j++) {
			if (isUnits(token_array[j])) {
				courserank_array_units_grade.push(getUnits(token_array[j]));
			} else if (isGrade(token_array[j])) {
				courserank_array_units_grade.push(token_array[j]);
			} else {
				break;
			}	 			
		}
	}

	var first_year = firstYear(courserank_array_subject_number);
	var quarter;
	var unitsCounter = 0;
	var gradeCounter = 0;
	//parse subject and number
	for (var i=0; i<courserank_array_subject_number.length; i++) {
		if ((courserank_array_subject_number[i] == "autumn") || (courserank_array_subject_number[i] == "winter") || (courserank_array_subject_number[i] == "spring") || (courserank_array_subject_number[i] == "summer")) {
			quarter = getQuarter(courserank_array_subject_number, i, first_year);
		}
		if (isSubject(courserank_array_subject_number[i], subjectAbbreviationsArray) && isCourseNumber(courserank_array_subject_number[i + 1])) {
			var currentCourse = new Course(courserank_array_subject_number[i], courserank_array_subject_number[i+1], quarter);
			course_array.push(currentCourse);
		}
	} 			

	var unitsCounter = 0;
	var gradeCounter = 0;

	//parse 
	for (var i=0; i<courserank_array_units_grade.length; i++) {
		if (isUnits(courserank_array_units_grade[i])) {
			course_array[unitsCounter].units = courserank_array_units_grade[i];
			unitsCounter++;
		} else if (isGrade(courserank_array_units_grade[i])) {
			course_array[gradeCounter].grade = courserank_array_units_grade[i];
			gradeCounter++;
		}
	}

	for (var i = 0; i < course_array.length; i++) {
		if(course_array[i].quarter > 16) {
			course_array.splice(i,1);
			i--;
		}
	}
	return course_array;
}

function firstYear(array) {
	for (var i=0; i<array.length; i++) {
		if (array[i].match(/([0-9]{4}-[0-9]{4})/g) != null) {
			return getYear(array[i]);
		}
	}
}

function getYear(yearString) {
	return parseInt(yearString.substr(0,4));
}

function getQuarter(array, index, first_year) {
	var currentQuarter;
	switch (array[index]) {
		case "autumn":
			return (1 + 4*(getYear(array[index + 1]) - first_year)); 
		case "winter":
			return (2 + 4*(getYear(array[index + 1]) - first_year)); 
		case "spring":
			return (3 + 4*(getYear(array[index + 1]) - first_year)); 
		case "summer":
			return (4 + 4*(getYear(array[index + 1]) - first_year)); 
	}
}

function isSubject(string) {
	return (subjectAbbreviationsArray.indexOf(string) != -1);
}

function isCourseNumber(string) {
	return (string.match(/[0-9]+/g) != null);
}


/* Had to adapt (and complicate) this function, because during beta testing, one student's pdf -> text file placed units at the end 
 * of a string, like this: "Linear Algebra and Partial Differential Equations for Engineers 5.0"  Usually, units and 
 * grades appear alone, on their own line. But it seems that for particularly long course titles, the units may appear
 * on the same line as the course title. 
 */
function isUnits(string) {
	//why does javascript not support lookbehinds?
	var index = string.search(/\d\.\d(?=$| )/g);
	if (index != -1) {
		if (index == 0) {
			return true;
		} else if (string.charAt(index - 1) == ' ') {
			return true;
		} else {
			return false;
		}
	} else {
		return false;
	}
}

/* Had to add this function, because during beta testing, one student's pdf -> text file placed units at the end of a string, like
 * this: "Linear Algebra and Partial Differential Equations for Engineers 5.0"  Usually, units and grades appear alone,
 * on their own line. But it seems that for particularly long course titles, the units may appear on the same line as
 * the course title. 
 */
function getUnits(string) {
	return string.match(/\d\.\d(?=$| )/g)[0];
}

function meetsMathScience(course_array) {
	var course_array_minus_ee102b = [];
	for (var i = 0; i < course_array.length; i++) {
		if (courseToString(course_array[i]) != 'ee102b') {
			course_array_minus_ee102b.push(course_array[i]);
		}
	}
	if (!((courseGraded(course_array, "math41") || courseGraded(course_array, "math41a")) && (courseGraded(course_array,"math42") || courseGraded(course_array,"math42a")))) {
		return false;
	}
	if (!(((courseGraded(course_array, "math53") || (courseGraded(course_array, "math53a"))) && (courseGraded(course_array, "math52") || courseGraded(course_array, "math52a"))) || ((courseGraded(course_array, "cme100") || courseGraded(course_array, "cme100a")) && ((courseGraded(course_array, "cme102") || courseGraded(course_array, "cme102a")))))) {
		return false;
	}
	if (!(courseGraded(course_array, "ee141") || courseGraded(course_array, "cme104") || courseGraded(course_array, "math113") || courseGraded(course_array, "cs103"))) {
		if !((courseGraded(course_array, "ee102b")) && meetsSpecialty(course_array_minus_ee102b)) {
			return false;
		}
	}
	if (!(courseGraded(course_array, "ee178") || courseGraded(course_array, "stats116") || courseGraded(course_array, "cs109"))) {
		return false;
	}
	if (!((courseGraded(course_array, "physics41") && courseGraded(course_array, "physics43")) || (courseGraded(course_array, "physics61") && courseGraded(course_array, "physics63")))) {
		return false;
	}
	if ((countGradedUnits(course_array, scienceArray) + uncountedScienceUnits(course_array)) < SCIENCE_UNITS_REQUIREMENT) {
		return false;
	}
	if (meetsSpecialty(course_array_minus_ee102b)) {
		if (countGradedUnits(course_array, mathArray) < MATH_UNITS_REQUIREMENT) {
			return false;
		}
	} else if (countGradedUnits(course_array_minus_ee102b, mathArray) < MATH_UNITS_REQUIREMENT) {
		return false;
	}

	return true;
}


function meetsTIS(course_array) {
	for (var i = 0; i < course_array.length; i++) {
		if (tisArray.indexOf(courseToString(course_array[i])) != -1) {
			if (isLetterGrade(course_array[i].grade)) {
				return true;
			}
		}
	}
	return false;
}

function meetsWIM(course_array) {
	for (var i = 0; i < course_array.length; i++) {
		if (wimArray.indexOf(courseToString(course_array[i])) != -1) {
			if (isLetterGrade(course_array[i].grade)) {
				return true;
			}
		}
	}
	return false;
}

function meetsFundamentals(course_array) {
	if (!((courseGraded(course_array, "cs106b") || courseGraded(course_array, "engr70b")) || (courseGraded(course_array, "cs106x") || courseGraded(course_array, "engr70x")))) {
		return false;
	}
	if (countGradedCourses(course_array, fundamentalsArray) < FUNDAMENTALS_COURSES_REQUIREMENT) {
		return false;
	}
	return true;
}

function meetsCore(course_array) {
	for (var i = 0; i < coreArray.length; i++) {
		if (coreArray[i] == "ee100") {
			if (!courseTaken(course_array, coreArray[i])) {
				return false;
			}
		} else if (!courseGraded(course_array, coreArray[i])) {
			return false;
		}
	}
	return true;
}

function meetsPhysics(course_array) {
	if (courseGraded(course_array, "ee141")) {
		return true;
	} else if (courseGraded(course_array, "ee41") || courseGraded(course_array, "engr40p")) {
		//EE41/ENGR40P can only meet this requirement if it is not used to fulfill the Fundamentals requirement
		if (countGradedCourses(course_array, fundamentalsArray) > FUNDAMENTALS_COURSES_REQUIREMENT) {
			return true;
		} else {
			return false;
		}
	} else {
		return false;
	}
}

function meetsSpecialty(course_array) {
	if ((courseGraded(course_array, "ee101b") || courseGraded(course_array, "ee102b")) && (courseGraded(course_array, "ee134") || courseGraded(course_array, "ee168") || courseGraded(course_array, "ee169")) && (countGradedUnits(course_array, bioelectronicsAndBioimagingArray) >= SPECIALTY_UNITS_REQUIREMENT) && (countGradedCourses(course_array, bioelectronicsAndBioimagingArray) >= SPECIALTY_COURSES_REQUIREMENT) {
		// Can apply EE101B or EE102B towards the Specialty requirement, but not both
		if (courseGraded(course_array, "ee101b") && courseGraded(course_array, "ee102b")) {
			if ((countGradedCourses(course_array, bioelectronicsAndBioimagingArray) - 1 >= SPECIALTY_COURSES_REQUIREMENT) && (countGradedUnits(course_array, bioelectronicsAndBioimagingArray) - EE101B_UNITS >= SPECIALTY_UNITS_REQUIREMENT)) {
				return true;
			}
		} else {
			return true;
		}
	} else if ((courseGraded(course_array, "ee101b")) && (courseGraded(course_array, "ee133") || courseGraded(course_array, "ee152")) && (countGradedUnits(course_array, circuitsAndDevicesArray) >= SPECIALTY_UNITS_REQUIREMENT) && (countGradedCourses(course_array, circuitsAndDevicesArray) >= SPECIALTY_COURSES_REQUIREMENT) {
		return true;
	} else if ((courseGraded(course_array, "ee108b")) && (courseGraded(course_array, "ee109") || courseGraded(course_array, "ee152")) && (countGradedUnits(course_array, computerHardwareArray) >= SPECIALTY_UNITS_REQUIREMENT) && (countGradedCourses(course_array, computerHardwareArray) >= SPECIALTY_COURSES_REQUIREMENT) {
		return true;
	} else if ((courseGraded(course_array, "ee108b")) && (courseGraded(course_array, "cs194w") || courseGraded(course_array, "ee152")) && (countGradedUnits(course_array, computerSoftwareArray) >= SPECIALTY_UNITS_REQUIREMENT) && (countGradedCourses(course_array, computerSoftwareArray) >= SPECIALTY_COURSES_REQUIREMENT) {
		// Can apply EE284 or CS144 towards the Specialty requirement, but not both
		if (courseGraded(course_array, "ee284") && courseGraded(course_array, "cs144")) {
			if ((countGradedCourses(course_array, computerSoftwareArray) - 1 >= SPECIALTY_COURSES_REQUIREMENT) && (countGradedUnits(course_array, computerSoftwareArray) - EE284_UNITS >= SPECIALTY_UNITS_REQUIREMENT)) {
				return true;
			}
		} else {
			return true;
		}
	} else if ((courseGraded(course_array, "ee102b") || courseGraded(course_array, "music320")) && (courseGraded(course_array, "ee109") || courseGraded(course_array, "ee265")) && (countGradedUnits(course_array, musicArray) >= SPECIALTY_UNITS_REQUIREMENT) && (countGradedCourses(course_array, musicArray) >= SPECIALTY_COURSES_REQUIREMENT) {
		// Can apply EE264 or EE265 towards the Specialty requirement, but not both
		if (courseGraded(course_array, "ee264") && courseGraded(course_array, "ee265")) {
			// Can apply EE102B or MUSIC320 towards the Specialty requirement, but not both
			if (courseGraded(course_array, "ee102B") && courseGraded(course_array, "music320")) {
				if ((countGradedCourses(course_array, musicArray) - 2 >= SPECIALTY_COURSES_REQUIREMENT) && (countGradedUnits(course_array, musicArray) - EE264_UNITS - MUSIC320_UNITS >= SPECIALTY_UNITS_REQUIREMENT)) {
					return true;
				}
			} else {
				if ((countGradedCourses(course_array, musicArray) - 1 >= SPECIALTY_COURSES_REQUIREMENT) && (countGradedUnits(course_array, musicArray) - EE264_UNITS >= SPECIALTY_UNITS_REQUIREMENT)) {
					return true;
				}
			}
		} else {
			if (courseGraded(course_array, "ee102B") && courseGraded(course_array, "music320")) {
				if ((countGradedCourses(course_array, musicArray) - 1 >= SPECIALTY_COURSES_REQUIREMENT) && (countGradedUnits(course_array, musicArray) - MUSIC320_UNITS >= SPECIALTY_UNITS_REQUIREMENT)) {
					return true;
				}
			} else {
				return true;
			}
		}
	} else if ((courseGraded(course_array, "ee102b")) && (courseGraded(course_array, "ee133") || courseGraded(course_array, "ee168") || courseGraded(course_array, "ee169") || courseGraded(course_array, "ee262") || courseGraded(course_array, "ee265")) && (countGradedUnits(course_array, signalProcessingCommunicationsAndControlsArray) >= SPECIALTY_UNITS_REQUIREMENT) && (countGradedCourses(course_array, signalProcessingCommunicationsAndControlsArray) >= SPECIALTY_COURSES_REQUIREMENT) {
		// Can apply EE264 or EE265 towards the Specialty requirement, but not both
		if (courseGraded(course_array, "ee264") && courseGraded(course_array, "ee265")) {
			if ((countGradedCourses(course_array, signalProcessingCommunicationsAndControlsArray) - 1 >= SPECIALTY_COURSES_REQUIREMENT) && (countGradedUnits(course_array, signalProcessingCommunicationsAndControlsArray) - EE264_UNITS >= SPECIALTY_UNITS_REQUIREMENT)) {
				return true;
			}
		} else {
			return true;
		}
	} else if ((courseGraded(course_array, "ee101b")) && (courseGraded(course_array, "ee134")) && (countGradedUnits(course_array, solidStatePhotonicsAndElectromagneticsArray) >= SPECIALTY_UNITS_REQUIREMENT) && (countGradedCourses(course_array, solidStatePhotonicsAndElectromagneticsArray) >= SPECIALTY_COURSES_REQUIREMENT) {
		// EE141 can only count towards the Specialty requirement if not used to fulfill the EE Physics requirement
		if (courseGraded(course_array, "ee141")) {
			if ((countGradedCourses(course_array, solidStatePhotonicsAndElectromagneticsArray) - 1 >= SPECIALTY_COURSES_REQUIREMENT) && (countGradedUnits(course_array, solidStatePhotonicsAndElectromagneticsArray) - EE141_UNITS >= SPECIALTY_UNITS_REQUIREMENT)) {
				return true;
			} else if ((courseGraded(course_array, "ee41") || courseGraded(course_array, "engr40p")) && (countGradedCourses(course_array, fundamentalsArray) - 1 >= FUNDAMENTALS_COURSES_REQUIREMENT)) {
				return true;
			}
		} else {
			return true;
		}
	} else if ((courseGraded(course_array, "ee101b") || courseGraded(course_array, "ee108b")) && (courseGraded(course_array, "ee134") || courseGraded(course_array, "ee152") || courseGraded(course_array, "ee168")) && (countGradedUnits(course_array, energyAndEnvironmentArray) >= SPECIALTY_UNITS_REQUIREMENT) && (countGradedCourses(course_array, energyAndEnvironmentArray) >= SPECIALTY_COURSES_REQUIREMENT) {
		// Can apply EE101B or EE108B towards the Specialty requirement, but not both
		if (courseGraded(course_array, "ee101b") && courseGraded(course_array, "ee108b")) {
			if ((countGradedCourses(course_array, energyAndEnvironmentArray) - 1 >= SPECIALTY_COURSES_REQUIREMENT) && (countGradedUnits(course_array, energyAndEnvironmentArray) - EE101B_UNITS >= SPECIALTY_UNITS_REQUIREMENT)) {
				return true;
			}
		} else {
			return true;
		}
	} else {
		return false;
	}
}

function meetsCapstone(course_array) {
for (var i = 0; i < course_array.length; i++) {
		if (capstoneArray.indexOf(courseToString(course_array[i])) != -1) {
			if (isLetterGrade(course_array[i].grade)) {
				return true;
			}
		}
	}
	return false;
}

function meetsTopics(course_array) {
	// One tricky part here is that most of the core gets counted as gradedEETopicsUnits, but EE41 gets counted as gradedUnitsFundamentals since it is below the 100 level
	var gradedUnitsCognates = countGradedUnits(course_array, cognateArray);
	var gradedUnitsFundamentals = countGradedUnits(course_array, fundamentalsArray);
	var gradedUnitsEE = countGradedEETopicsUnits(course_array);
	var topicsUnits = gradedUnitsCognates + gradedUnitsFundamentals + gradedUnitsEE - extraUnitsEE191(course_array) - extraUnitsFundamentals(course_array);
	if (topicsUnits >= TOPICS_UNITS_REQUIREMENT) {
		return true;
	} else {
		return false;
	}
}

function countGradedEETopicsUnits(course_array) {
	var numUnits = 0;
	for (var i = 0; i < course_array.length; i++) {
		//Note that EE178 cannot count towards the Topics requirement if it is already counted towards the Math and Science requirement
		if ((course_array[i].subject == "ee") && (parseInt(course_array[i].number) >= EE_TOPICS_COURSE_NUMBER_MIN)) {
			if (isLetterGrade(course_array[i].grade)) {
				if (courseToString(course_array[i]) == "ee178") {
					if(courseGraded(course_array, "stats116") || courseGraded(course_array, "math151") || courseGraded(course_array, "cme106") || courseGraded(course_array, "engr155c") || courseGraded(course_array, "cs109")) {
						numUnits += parseInt(course_array[i].units);
					}
				} else {
					numUnits += parseInt(course_array[i].units);
				}
			}
		}
	}
	return numUnits;
}

function uncountedScienceUnits(course_array) {
	var uncounted_units = countUnits(course_array, scienceNoLetterGradeArray);
	return uncounted_units;
}

function extraUnitsEE191(course_array) {
	var extra_units = countGradedUnits(course_array, ee191Array) - EE191_UNITS_MAX;
	if (extra_units > 0) {
		return extra_units;
	} else {
		return 0;
	}
}

function extraUnitsFundamentals(course_array) {
	var fundamentals_course_array = [];
	var extra_units = 0;
	for (var i = 0; i < course_array.length; i++) {
		if (fundamentalsArray.indexOf(courseToString(course_array[i])) != -1) {
			// I interpret the UGHB to say that students could potentially count 5 ENGR Fundamentals and EE41/ENGR40P towards the topics requirement
			if (isLetterGrade(course_array[i].grade) && (courseToString(course_array[i]) != "ee41") && (courseToString(course_array[i]) != "engr40p")) {
				fundamentals_course_array.push(course_array[i]);
			}
		}
	}

	if (fundamentals_course_array.length > FUNDAMENTALS_COURSES_MAX) {
		fundamentals_course_array.sort(function(a,b){return parseInt(a.units) - parseInt(b.units)});
		for (var i = 0; i < (fundamentals_course_array.length - FUNDAMENTALS_COURSES_MAX); i++) {
			extra_units += parseInt(fundamentals_course_array[i].units);
		}
		return extra_units;
	} else {
		return 0;
	}
}


//counts the number of graded units taken that are contained in the reference array
function countGradedUnits(course_array, reference_array) {
	var numUnits = 0;
	for (var i = 0; i < course_array.length; i++) {
		if (reference_array.indexOf(courseToString(course_array[i])) != -1) {
			if (isLetterGrade(course_array[i].grade)) {
				numUnits += parseInt(course_array[i].units);
			}
		}
	}
	return numUnits;
}

//counts the number of units taken that are contained in the reference array
function countUnits(course_array, reference_array) {
	var numUnits = 0;
	for (var i = 0; i < course_array.length; i++) {
		if (reference_array.indexOf(courseToString(course_array[i])) != -1) {
			numUnits += parseInt(course_array[i].units);
		}
	}
	return numUnits;
}

//counts the number of graded courses taken that are contained in the reference array
function countGradedCourses(course_array, reference_array) {
	var numCourses = 0;
	for (var i = 0; i < course_array.length; i++) {
		if (reference_array.indexOf(courseToString(course_array[i])) != -1) {
			if (isLetterGrade(course_array[i].grade)) {
				numCourses++;
			}
		}
	}
	return numCourses;
}

//Determines if course is contained in the courseArray
function courseTaken(course_array, course) {
	for (var i = 0; i < course_array.length; i++) {
		if ((courseToString(course_array[i])) == course) {
			return true;
		}
	}
	return false;
}

//Determines if course is contained in the courseArray and was taken for a letter grade
function courseGraded(course_array, course) {
	for (var i = 0; i < course_array.length; i++) {
		if (((courseToString(course_array[i])) == course) && (isLetterGrade(course_array[i].grade))) {
			return true;
		}
	}
	return false;
}

//Takes Course object as parameter, returns string. E.g. {"cs", "106a", 1, "5.0", "a"} => "cs106a"
function courseToString(course_obj) {
	return (course_obj.subject + course_obj.number);
}

function removeEmptyStrings(array) {
	for (var i = 0; i < array.length; i++) {
		if (array[i] == "") {
			array.splice(i,1);
			i--;
		}
	}
}

function removeNonUnitsGradesStrings(array) {
	for (var i = 0; i < array.length; i++) {
		if (!((isUnits(array[i])) || (isGrade(array[i])))) {
			array.splice(i,1);
			i--;
		}
	}
}

// These strings should be removed so that total quarter units and gpa are not mistaken for course units during parsing
function removeNewQuarterStrings(array) {
	for (var i = 0; i < array.length; i++) {
		if ((array[i].indexOf("spring") != -1) || (array[i].indexOf("winter") != -1) || (array[i].indexOf("autumn") != -1) || (array[i].indexOf("summer") != -1) ) {
			array.splice(i,1);
			i--;
		}
	}
}

function isGrade(string) {
	//Why must formatting be strict in javascript. -__-
	switch (string) {
		case "a+":
			return true;
		case "a":
			return true;
		case "a-":
			return true;
		case "b+":
			return true;
		case "b":
			return true;
		case "b-":
			return true;
		case "c+":
			return true;
		case "c":
			return true;
		case "c-":
			return true;
		case "d+":
			return true;
		case "d":
			return true;
		case "d-":
			return true;
		case "cr":
			return true;
		case "i":
			return true;
		case "l":
			return true;
		case "n":
			return true;
		case "n-":
			return true;
		case "nc":
			return true;
		case "np":
			return true;
		case "rp":
			return true;
		case "s":
			return true;
		case "w":
			return true;
		case "*":
			return true;
		case "gnr":
			return true;
		case "n\/a": 				// Courses that haven't been taken yet.
			return true;
		default:
			return false;
	}
}

function isLetterGrade(string) {
	//Why must formatting be strict in javascript. -__-
	switch (string) {
		case "a+":
			return true;
		case "a":
			return true;
		case "a-":
			return true;
		case "b+":
			return true;
		case "b":
			return true;
		case "b-":
			return true;
		case "c+":
			return true;
		case "c":
			return true;
		case "c-":
			return true;
		case "d+":
			return true;
		case "d":
			return true;
		case "d-":
			return true;
		case "n\/a": 				// Assume future courses will be taken for a letter grade.
			return true;
		default:
			return false;
	}
}	 	