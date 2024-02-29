function beforeSendData(customFields,customFacts){
	
	
	customFields[0] =hAPI.getCardValue("origem");
	
		
	customFacts[0]=java.lang.Double.parseDouble(hAPI.getCardValue("valorTotal"));
}
