package restServices;

import javax.xml.parsers.DocumentBuilder;
import javax.xml.parsers.DocumentBuilderFactory;

import org.w3c.dom.CharacterData;
import org.w3c.dom.Document;
import org.w3c.dom.Element;
import org.w3c.dom.Node;
import org.w3c.dom.NodeList;
import org.xml.sax.InputSource;

import java.io.StringReader;
import java.util.ArrayList;

import javax.ws.rs.Path;
import javax.ws.rs.core.MediaType;
import javax.annotation.security.RolesAllowed;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.Produces;

@Path("/Portal")
public class test {

	@RolesAllowed("ADMIN")
	@GET
	@Path("/getEmpData")
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	public Employees getAllEmployees() {
		Employees list = new Employees();
		list.setEmployeeList(new ArrayList<Employee>());

		list.getEmployeeList().add(new Employee(1, "Lokesh Gupta"));
		list.getEmployeeList().add(new Employee(2, "Alex Kolenchiskey"));
		list.getEmployeeList().add(new Employee(3, "David Kameron"));

		return list;
	}

	@GET
	@Path("/getData")
	@Produces(MediaType.TEXT_HTML)
	public String sayHtmlHello() {
		return "<html> " + "<title>" + "Hello Jersey" + "</title>" + "<body><h1>" + "Hello Jersey" + "</body></h1>"
				+ "</html> ";
	}

	@GET
	@Path("/testXML")
	@Produces(MediaType.TEXT_HTML)
	public String sayXMLHello() {

		String xmlRecords = "<data>" + " <employee>" + "   <name>ajay</name>" + "   <title>singh</title>"
				+ "   <salary>10000</salary>" + " </employee>" + " <employee>" + "   <name>rahul</name>"
				+ "   <title>singh</title>" + "   <salary>10000</salary>" + " </employee>" + " <employee>"
				+ "   <name>ashok</name>" + "   <title>mehra</title>" + "   <salary>10000</salary>" + " </employee>"
				+ " <employee>" + "   <name>abhay</name>" + "   <title>singh</title>" + "   <salary>10000</salary>"
				+ " </employee>" + " <employee>" + "   <name>rajat</name>" + "   <title>kumar</title>"
				+ "   <salary>10000</salary>" + " </employee>" + " <employee>" + "   <name>hari</name>"
				+ "   <title>singh</title>" + "   <salary>10000</salary>" + " </employee>" + " <employee>"
				+ "   <name>vikas</name>" + "   <title>singh</title>" + "   <salary>10000</salary>" + " </employee>"
				+ "</data>";

		try {
			DocumentBuilderFactory dbf = DocumentBuilderFactory.newInstance();
			DocumentBuilder db = dbf.newDocumentBuilder();
			InputSource is = new InputSource();
			is.setCharacterStream(new StringReader(xmlRecords));

			Document doc = db.parse(is);
			NodeList nodes = doc.getElementsByTagName("employee");

			// iterate the employees
			for (int i = 0; i < nodes.getLength(); i++) {
				Element element = (Element) nodes.item(i);

				NodeList name = element.getElementsByTagName("name");
				Element line1 = (Element) name.item(0);
				System.out.println("Name: " + getCharacterDataFromElement(line1));

				NodeList title = element.getElementsByTagName("title");
				Element line2 = (Element) title.item(0);
				NodeList salary = element.getElementsByTagName("salary");
				Element line3 = (Element) salary.item(0);
				System.out.println("Title: " + getCharacterDataFromElement(line2));

			}
		} catch (Exception e) {
			e.printStackTrace();
		}

		return xmlRecords;
	}

	public static String getCharacterDataFromElement(Element e) {
		Node child = e.getFirstChild();
		if (child instanceof CharacterData) {
			CharacterData cd = (CharacterData) child;
			return cd.getData();
		}
		return "?";
	}

}
