from django import forms
from .models import CustomerProfile, User as UserProfile


class UserForm(forms.ModelForm):
    password = forms.CharField(widget=forms.PasswordInput)
    password_confirm = forms.CharField(widget=forms.PasswordInput())

    class Meta:
        model = UserProfile
        fields = ['username', 'email', 'password', 'is_active']

    def clean(self):
        cleaned_data = super(UserForm, self).clean()
        password = cleaned_data.get("password")
        password_confirm = cleaned_data.get("password_confirm")
        if password != password_confirm:
            msg = 'Las contraseñas no coinciden'
            self.add_error('password_confirm', msg)


class CustomerProfileForm(forms.ModelForm):
    class Meta:
        model = CustomerProfile
        fields = [
            'username',
            'email',
            'password',
            'is_active',
            'phone_number',
            'longitude',
            'latitude',
            'address',
            'first_dabba'
        ]
