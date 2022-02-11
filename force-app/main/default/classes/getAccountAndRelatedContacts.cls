public with sharing class getAccountAndRelatedContacts {
    
    @AuraEnabled(cacheable=true)
    public static List<contact> getAccRCon() {
        return [select id, name, email, phone, account.id, account.name from contact];
        }

 

}
