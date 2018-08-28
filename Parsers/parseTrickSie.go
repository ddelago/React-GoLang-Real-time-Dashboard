// Daniel Delago 
// daniel.b.delago@nasa.gov
// Go XML Parser for S_sie.resource files
package Parsers

import (
	"encoding/xml"
	"fmt"	
	"io/ioutil"
)

func ExampleUnmarshal() {

	type Pair struct {
		Label 			string 				`xml:"label,attr"`
		Value 			string 				`xml:"value,attr"`
	}	

	type Enumeration struct {
		Name 			string 				`xml:"name,attr"`
		Pairs			[]Pair 				`xml:"pair"`
	} 

	type Member struct {
		Name 			string 				`xml:"name,attr"`
		Type 			string 				`xml:"type,attr"`
		IO_attributes 	string 				`xml:"io_attributes,attr"`
		Units 			string 				`xml:"units,attr"`
		Description 	string 				`xml:"description,attr"`
		Dimensions 		[]string			`xml:"dimension"`
	}

	type Class struct {
		XMLName 		xml.Name 			`xml:"class"`
		Name 			string 				`xml:"name,attr"`
		Members 		[]Member 			`xml:"member"`
	}

	type TopLevelObject struct {
		XMLName 		xml.Name 			`xml:"top_level_object"`
		Name 			string 				`xml:"name,attr"`
		Type 			string 				`xml:"type,attr"`
		Dimensions 		[]string			`xml:"dimension"`
	} 

	type SIE struct {
		XMLName 		xml.Name 			`xml:"sie"`
		TopLevelObjects	[]TopLevelObject 	`xml:"top_level_object"`
		Classes			[]Class 			`xml:"class"`
		Enumerations	[]Enumeration 		`xml:"enumeration"`
	}

	v := SIE{}

	dat, err := ioutil.ReadFile("src/variables/S_sie.resource")

	if err != nil {
        panic(err)
	}
	
	err2 := xml.Unmarshal([]byte(dat), &v)
	if err2 != nil {
		fmt.Printf("error: %v", err2)
		return
	}

	// fmt.Printf("XMLName: %#v\n", v.XMLName)
	// for object := range v.TopLevelObjects {
	// 	fmt.Printf("Object Name: %v\n", v.TopLevelObjects[object].Name)
	// 	fmt.Printf("---Type: %v\n", v.TopLevelObjects[object].Type)
	// 	fmt.Printf("---Dimensions: %v Length: %v\n", v.TopLevelObjects[object].Dimensions, len(v.TopLevelObjects[object].Dimensions))
	// }

	// fmt.Printf("\n\nCLASSES BELOW:\n")
	// for object := range v.Classes {
	// 	fmt.Printf("Class Name: %v\n", v.Classes[object].Name)	
	// 	for member := range v.Classes[object].Members {
	// 		fmt.Printf("---member: %v\n", v.Classes[object].Members[member].Name)
	// 		fmt.Printf("   ---Type: %v\n", v.Classes[object].Members[member].Type)
	// 		fmt.Printf("   ---IO_attributes: %v\n", v.Classes[object].Members[member].IO_attributes)
	// 		fmt.Printf("   ---Units: %v\n", v.Classes[object].Members[member].Units)
	// 		fmt.Printf("   ---Description: %v\n", v.Classes[object].Members[member].Description)
	// 		fmt.Printf("   ---Dimensions: %v Length: %v \n", v.Classes[object].Members[member].Dimensions, len(v.Classes[object].Members[member].Dimensions))
	// 	}
	// }

	// fmt.Printf("\n\nENUMERATIONS BELOW:\n")
	// for object := range v.Enumerations {
	// 	fmt.Printf("Enum Name: %v\n", v.Enumerations[object].Name)
	// 	for pair := range v.Enumerations[object].Pairs {
	// 		fmt.Printf("---Pair: %v %v\n",v.Enumerations[object].Pairs[pair].Label, v.Enumerations[object].Pairs[pair].Value)
	// 	}
	// }


	// TODO: Enable functionality below to display all available trick variables on Dashboard

	// varList := make([]string,0)
	// classMap := make(map[string]bool)
	// enumMap := make(map[string]bool)

	// // Create boolean map for classes
	// for i := 0; i < len(v.Classes); i++ {
 //    	classMap[v.Classes[i].Name] = true
	// }

	// // Create boolean map for enums
	// for i := 0; i < len(v.Enumerations); i++ {
 //    	enumMap[v.Enumerations[i].Name] = true
	// }

	// // For each top level object
	// for object := range v.TopLevelObjects {
		
	// 	varName := v.TopLevelObjects[object].Name
	// 	dim := len(v.TopLevelObjects[object].Dimensions)

	// 	// Dimension length is zero, only single attribute
	// 	if dim == 0 {
	// 		// If type is a class
	// 		if classMap[v.TopLevelObjects[object].Type] {

	// 		}

	// 		// If type is an enum
	// 		else if enumMap[v.TopLevelObjects[object].Type] {
	// 			// Just append because not able to change variable values yet
	// 			varList = append(varList, varName)
	// 		}

	// 		// Else type is a primitive type
	// 		else {
	// 			varList = append(varList, varName)
	// 		}
	// 	}
	// }


}

func main(){

	ExampleUnmarshal()
}
